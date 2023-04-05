import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
import { redirect } from "react-router-dom";

const GitHubContext = createContext()

const GitHubURL = process.env.REACT_APP_GITHUB_URL

export const GitHubProvider = ({children}) => {

    const initialState = {
        users: [],
        user: {}, 
        loadingUser: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // GET OUR USERS, IT'S JUST FOR TEST PURPOSES
    const fetchUsers = async () => {

        dispatch({
            type: 'SET_LOADING',
            loadingValue: true
        })

        const response = await fetch(`${GitHubURL}users`)
        const data = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    } 

    const searchUsers = async (searchText) => {
        dispatch({
            type: 'SET_LOADING',
            loadingValue: true
        })

        const params = new URLSearchParams({
            q: searchText
        })

        const response = await fetch(`${GitHubURL}search/users?${params}`)

        const {items} = await response.json()

        // we can get data and then playload will be data.items  

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const clearUsers = () => {
        dispatch({
            type: 'GET_USERS',
            payload: []
        })
    }

    const fetchUser = async (userLogin) => {

        dispatch({
            type: 'SET_LOADING',
            loadingValue: true
        })

        const response = await fetch(`${GitHubURL}users/${userLogin}`)
        if (response.status === 404) window.location = '/notfound'
        else {
            const data = await response.json()
        
            dispatch({
                type: 'GET_USER',
                payload: data

            })
        }
    }

    return <GitHubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        fetchUsers,
        searchUsers,
        clearUsers,
        fetchUser,
    }}>
        {children}
    </GitHubContext.Provider>
}

export default GitHubContext
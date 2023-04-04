import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GitHubContext = createContext()

const GitHubURL = process.env.REACT_APP_GITHUB_URL

export const GitHubProvider = ({children}) => {

    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // GET OUR USERS? IT'S JUST FOR TEST PURPOSES
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

    return <GitHubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
    }}>
        {children}
    </GitHubContext.Provider>
}

export default GitHubContext
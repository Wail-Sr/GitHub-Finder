import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GitHubContext = createContext()

export const GitHubProvider = ({children}) => {

    const initialState = {
        users: [],
        user: {}, 
        repos: [],
        loadingUser: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    return <GitHubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GitHubContext.Provider>
}

export default GitHubContext
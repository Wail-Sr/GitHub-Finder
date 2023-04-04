import { createContext, useState } from "react";
import { useContext } from "react";

const GitHubContext = createContext()

const GitHubURL = process.env.REACT_APP_GITHUB_URL

export const GitHubProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${GitHubURL}users`)
        const data = await response.json()

        setUsers(data)
        setLoading(false)
        console.log(data)
    } 

    return <GitHubContext.Provider value={{
        users,
        loading,
        fetchUsers,
    }}>
        {children}
    </GitHubContext.Provider>
}

export default GitHubContext
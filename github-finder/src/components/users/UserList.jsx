import React from 'react'
import { useEffect, useState } from 'react'
import UserCard from './UserCard'

function UserList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}users`)
        const data = await response.json()

        setUsers(data)
        setLoading(false)
        console.log(data)
    } 

    if (!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 mg:grid-cols-2'>
                {users.map((user) => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </div>
          )
    } else{
        
        return (
            <>
                <h3>Loading...!</h3>
                <p>Please wait...</p>
            </>
        )
    }

}

export default UserList
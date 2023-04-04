import React from 'react'
import { useEffect } from 'react'
import UserCard from './UserCard'
import GitHubContext from '../../context/github/GitHubContext'
import { useContext } from 'react'

function UserList() {

    const {users, loading, fetchUsers} = useContext(GitHubContext)
    
    useEffect(() => {
        fetchUsers()
    }, [])

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
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserCard({user: {login, avatar_url}}) {
  return (
    // <div className='card shadow-xl comapct side bg-base-100'>UserCard</div>

    <div className="card side bg-base-100 shadow-xl glass">
        <div className="flex-row items-left space-x-4 card-body p-4">
            <div>
                <div className="avatar">
                    <div className="w-14 h-14 shadow rounded-full ring ring-accent ring-base-100">
                        <img src={avatar_url} alt="Profile"/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link to={`/users/${login}`} className='text-base-content text-opacity-40 underline'>Visit Profile</Link>
            </div>
        </div>
    </div>
  )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserCard
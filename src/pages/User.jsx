import React from 'react'
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import GitHubContext from '../context/github/GitHubContext'
import { useParams } from 'react-router-dom'

function User() {

  const {user, fetchUser, loading} = useContext(GitHubContext)

  const params = useParams()

  useEffect(() => {
    fetchUser(params.login)
  }, [])

  const {
    name, 
    type,
    avatar_url,
    loaction,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if (loading) return (
      <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
  )

  else return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/'>
            <button type="button" className="text-gray-100 hover:text-white border border-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center px-4 py-3">
              <span style={{display: 'flex', alignItems: 'center'}}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span style={{marginLeft: '0.8rem'}}>Get Back to Search Page</span>
              </span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8" style={{gridTemplateColumns
        : 'auto 1fr 1fr'}}>
          <div className="card w-56 bg-base-100 shadow-xl">
            <figure className="px-4">
              <img src={avatar_url} alt="Profile Picture" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center py-2">
              <h2 className="card-title">{name}</h2>
              <p>{login}</p>
            </div>
          </div>

          <div className='col-span-2'>
            <div className="mb-6">
              <h1 className="text-xl card-title inline-block">
                {name}
                <div className="ml-2 mr-1 badge badge-success badge-outline">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info badge-outline">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>

              <div className="mt-4 card-actions">
                <a href={html_url} target='_blank' rel='noreferrer' className="py-2 btn btn-outline">Visit GitHub Profile</a>
              </div>
            </div>
          </div>

          <div className='col-sapn-3'></div>

        </div>
      </div>
    </>
  )
}

export default User
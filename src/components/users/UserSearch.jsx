import React from 'react'
import { useState, useContext } from 'react'
import GitHubContext from '../../context/github/GitHubContext'

function UserSearch() {

  const [inputText, setInputText] = useState('')

  const { users, searchUsers, clearUsers } = useContext(GitHubContext)

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputText.length > 0) {
      searchUsers(inputText)
      setInputText('')
    } else {
      window.alert('Search Field is empty! Please Enter a user name.')
    }
  }

  return (
    <>
      <div className='flex items-center mb-5' style={{maxWidth: '600px'}}>
        <div className='flex-1 pr-2 mr-2'>
          <form onSubmit={handleSubmit}>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" id="default-search" className="block w-full p-4 pl-10 text-lm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 focus:bg-gray-100" placeholder="Search Users..." value={inputText} onChange={handleInputChange}/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
          </form>
        </div>

        {users.length > 0 && (
          <div>
            <button className='btn btn-ghost btn-mg' onClick={clearUsers}>Clear</button>
          </div>
        )}
      </div>

      {/* <div className="p-4 m-4 text-sm text-red-700 rounded-lg bg-red-50 bg-opacity-90" role="alert" style={{maxWidth:'500px'}}>
          <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
        </div> */}
    </>

    
  )
}

export default UserSearch
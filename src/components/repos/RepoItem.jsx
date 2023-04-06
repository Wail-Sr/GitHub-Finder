import React from 'react'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function RepoItem({repo}) {

    const {
        name,
        description, 
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo

  return (
    <div className="mb-2 rounded-lg card bg-gray-800 hover:bg-gray-900">
        <div className="card-body">
            <h3 className="mb-2 text-l font-semibold">
                <a href={html_url}>
                    <FaLink className='inline mr-2 text-s pb-1'/> {name}
                </a>
            </h3>
            <p className="mb-3">{description}</p>
            <div>
                <div className="mr-2 badge-info badge bagde-lg badge-outline rounded-lg" style={{padding: "10px 15px"}}>
                    <FaEye className="mr-2" /> {watchers_count}
                </div>
                <div className="mr-2 badge-success badge bagde-lg badge-outline rounded-lg" style={{padding: "10px 15px"}}>
                    <FaStar className="mr-2" /> {stargazers_count}
                </div>
                <div className="mr-2 badge-error badge bagde-lg badge-outline rounded-lg" style={{padding: "10px 15px"}}>
                    <FaInfo className="mr-2" /> {open_issues}
                </div>
                <div className="mr-2 badge-warning badge bagde-lg badge-outline rounded-lg" style={{padding: "10px 15px"}}>
                    <FaUtensils className="mr-2" /> {forks}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepoItem
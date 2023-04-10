import axios from "axios"

const GitHubURL = process.env.REACT_APP_GITHUB_URL
const github = axios.create({
    baseURL: GitHubURL
})

// GET OUR USERS, IT'S JUST FOR TEST PURPOSES
// const fetchUsers = async () => {

//     dispatch({
//         type: 'SET_LOADING',
//         loadingValue: true
//     })

//     const response = await fetch(`${GitHubURL}users`)
//     const data = await response.json()

//     dispatch({
//         type: 'GET_USERS',
//         payload: data
//     })
// }

export const fetchUser = async (userLogin) => {

    // const response = await fetch(`${GitHubURL}users/${userLogin}`)
    // const response2 = await fetch(`${GitHubURL}users/${userLogin}/repos`)
    // if (response.status === 404 || response2.status === 404) window.location = '/notfound'
    // else {
    //     const data = await response.json()
    //     const data2 = await response2.json()

    //     return {data, data2}
    // }

    const [user, repos] = await Promise.all([
        github.get(`/users/${userLogin}`),
        github.get(`/users/${userLogin}/repos`)
    ])
    return {user: user.data, repos: repos.data}
}

export const searchUsers = async (searchText) => {

    const params = new URLSearchParams({
        q: searchText
    })

    // const response = await fetch(`${GitHubURL}search/users?${params}`)
    // const {items} = await response.json()

    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}
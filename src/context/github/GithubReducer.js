

const GithubReducer = (state, action) => {
    switch (action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loadingValue
            }
        
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                repos: action.repos,
                loading: false,
            }
            
        default:
            return state
    }
}

export default GithubReducer
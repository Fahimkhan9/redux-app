const axios = require("axios")
const { createStore, applyMiddleware } = require("redux")
const {thunkMiddleWare} =  require("redux-thunk").default
const intialstate ={
    loading: true,
    users:[],
    err: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchuserrequest =() => {
    return{
        type:FETCH_USERS_REQUEST
    }
}
const fetchuseressuccess =(users) => {
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchusersfailure  =(error) => {
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}
const reducer =(state = intialstate ,action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
            loading: true
            }
            
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users:action.payload,
                error:false
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                users:[],
                error:action.payload
            }
    
        default:
            return state
    }
}

// const fetchusers =(dispatch) => {
//     return function() {
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then(res => {
//     const users = res.data
// dispatch(fetchuseressuccess(users))
// })
// .catch(err => {

// })
//     }
// }

// const store = createStore(reducer,applyMiddleware(thunkMiddleWare))
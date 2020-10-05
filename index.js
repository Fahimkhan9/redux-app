const { createStore, combineReducers, applyMiddleware } = require("redux")
const { createLogger } = require("redux-logger")

const  logger = createLogger()


const BUY_CAKE= "BUY_CAKE"
const BUY_ICECREAM = 'BUY_ICECREAM'
const buyCake =() => {
    return{ 
        type: BUY_CAKE,
        info:"First"
    }
}
const buyicecream =() => {
    return{
        type: BUY_ICECREAM,
        info:"second"
    }
}

// const intialstate ={
//     numofcakes : 10
// }
const initialcakestate ={
    numofcakes : 10
}
const intitalicestate ={
    numoficecream : 20
}
const cakereducer =(state = initialcakestate,action) =>{
switch (action.type) {
    case BUY_CAKE:
        return {
            ...state,
numofcakes: state.numofcakes -1
        }
        
        

    default:
        return state
}
}
const icecreamreducer = (state = intitalicestate,action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            
            return{
                ...state,
                numoficecream: state.numoficecream - 1
            }
    
        default:
        return state
    }
}

const rootreducer = combineReducers({
    cake: cakereducer,
    icecream: icecreamreducer
})
const store = createStore(rootreducer,applyMiddleware(logger))
console.log("initial state", store.getState()  );

const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())

unsubscribe()
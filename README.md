# Simple Redux
# Library Should Be Install
  1. npm i redux-thunk  
  2. npm i redux-logger  
  3. npm i redux
     
# Redux Steps
1. Define constant  
   ```js
   const GET_PRODUCTS = "GET_PRODUCTS"
   const ADD_PRODUCT = "ADD_PRODUCT"
2. Initial State
const products_initial_state = {
    products: ['mango', 'litchi'],
    numberOfProducts: 2
}

5. Call Action
   const getProducts = () => {
   return {
        type: GET_PRODUCTS
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product

    }
}

7. Make Reducer
   const productsReducer = (state = products_initial_state, action) => {
   switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}
9. Create store
    const store = createStore(productsReducer,applyMiddleware(logger))  
    store.subscribe(() => {
    console.log(store.getState())
})
   # Three Steps
   1. getstate()
   2. dispatch()
   3. subscribe()

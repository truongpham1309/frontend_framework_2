import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { TProduct } from "../../types/showName"
import { thunk } from "redux-thunk"

const initialProduct = {
    isLoading: false,
    products: [] as TProduct[],
    error: '',
}



const reducerProduct = (state = initialProduct, action: any) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...state,
                products: [...action.payload]
            }
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
            }
        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload.id ? action.payload : product),
            }
        case "DELETE_PRODUCT": {
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            }
        }
    }
}

const store = createStore(reducerProduct, applyMiddleware(thunk));

export default store;
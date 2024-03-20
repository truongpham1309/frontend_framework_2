import { TProduct } from "../../types/showName";


type TState = {
    value: TProduct[],
    isLoading: boolean,
    error: string
}

const initialProduct = {
    value: [] as TProduct[],
    isLoading: true,
    error: "",
} as TState
export const reducer = (initialProduct: TState, action: { type: string, payload: any }) => {

    switch (action.type) {
        case "SET_PRODUCT":
            initialProduct.value = action.payload;
            break;
        case "CREATE_PRODUCT":
            initialProduct.value.push(action.payload);
            break;
        case "UPDATE_PRODUCT":
           initialProduct.value.map(p => p.id === action.payload.id ? action.payload : p) ;
           break;
        case "DELETE_PRODUCT":
            initialProduct.value.filter(p => p.id !== action.payload);
            break;
        default:
            throw Error("Invalid action");
    }
}
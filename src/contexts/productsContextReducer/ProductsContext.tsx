import React, { createContext, useReducer } from "react";
import { TProduct } from "../../types/showName";
import { reducer } from "./reducer";
import { produce } from "immer";

export const ProductsContext = createContext<any>([]);

const initialProduct = {
    value: [] as TProduct[],
    isLoading: true,
    error: "",
}

type ProductsContextProviderProps = {
    children: React.ReactNode,
}
const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
    const [products, dispatch] = useReducer(produce(reducer), initialProduct);
    return <ProductsContext.Provider value={[products, dispatch]}>
        {children}
    </ProductsContext.Provider>
}
export default ProductsContextProvider
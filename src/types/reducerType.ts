import { TProduct } from "./showName"

export type State = {
    products: TProduct[];
    isLoading: boolean,
    error: string | null,
}

export type TProductCreate = {
    type: "ADD_PRODUCT",
    payload: Omit<TProduct, "id">,
}

export type TGetAllProduct = {
    type: "GET_ALL_PRODUCT",
    payload: TProduct[],
}

export type TGetDetailProduct = {
    type: "GET_DETAIL_PRODUCT",
    payload: number,
}

export type TDeleteProduct = {
    type: "DELETE_PRODUCT",
    payload: number,
}

export type TAction = TGetDetailProduct | TDeleteProduct | TProductCreate | TGetAllProduct;
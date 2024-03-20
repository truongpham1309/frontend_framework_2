import axios from "axios";
import { TProduct } from "../types/showName";

export const getAllProducts = async () => {
    try {
        const { data } = await axios.get('/products');
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getDetailProductByID = async (id: number) => {
    try {
        const { data } = await axios.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (product: Omit<TProduct, "id">) => {
    try {
        const { data } = await axios.post('/products', product);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const updateProductByID = async (product: TProduct) => {
    try {
        const { data } = await axios.put(`/products/${product.id}`, product);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProductByID = async (id: number) => {
    // if(!confirm('Are you sure you want to delete this product?')) return
    try {
        await axios.delete(`/products/${id}`);
    } catch (error) {
        console.log(error);
    }
}
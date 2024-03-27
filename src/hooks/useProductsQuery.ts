import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getDetailProductByID } from "../services/productService"

export const useProductsQuery = (id?: string) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['PRODUCTS', id],
        queryFn: async () => {
            return id ? await getDetailProductByID(id) : await getAllProducts();
        }
    })

    return { data, isLoading, isError }
}
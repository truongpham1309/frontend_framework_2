import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { createProduct, deleteProductByID, updateProductByID } from "../services/productService";
import { TProduct } from "../types/showName";
import { uploadImage } from "../utils/uploadImages";


export const useProductMutation = (action: { type: string }) => {
    const form = useForm();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async (product: TProduct) => {
            switch (action.type) {
                case "CREATE": return await createProduct(product);
                case "UPDATE": return await updateProductByID(product);
                case "DELETE": return window.confirm("Are you sure?") && await deleteProductByID(product);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT"]
            })
            navigate("/products");
        }
    })

    const onSubmit: SubmitHandler<TProduct> = async (product) => {
        const secret_url = typeof (product.image) === 'string' ?
            product.image : await uploadImage((product.image as any[]));

        const newProduct = { ...product, image: secret_url };
        mutation.mutate(newProduct);
    }

    return { form, ...mutation, onSubmit }
}
import { SubmitHandler, useForm } from 'react-hook-form';
import "./../css/product.module.css";
import { TProduct } from '../types/showName';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { updateProductByID } from '../services/productService';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Form } from 'react-bootstrap';
import { uploadImage } from '../utils/uploadImages';
const ProductEdit = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    // const [imageSrc, setImageSrc] = useState<string>("");

    // const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         const src = URL.createObjectURL(e.target.files[0]);
    //         setImageSrc(src);
    //     }
    // }

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (product: TProduct) => updateProductByID(product),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        }
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<TProduct>();

    const onSubmit: SubmitHandler<TProduct> = async (data: TProduct) => {
        // React Query ==> server State
        let secret_url: string = "";
        if (typeof (data.images) === 'string') {
            secret_url = data.images;
        }
        else {
            secret_url = await uploadImage(data.images as any);
        }

        const newProduct = { ...data, images: secret_url };
        toast.promise(async () => mutation.mutate(newProduct), {
            pending: "Updating...",
            success: "Updated product successfully!",
            error: "Error updating product!",
        })

        // useContext + useReducer ==> global state
        // const newProduct = await updateProductByID(data);
        // dispatch({ type: 'UPDATE_PRODUCT', payload: newProduct });
        // toast.success("Updated product successfully!");

        navigate('/products');
    }
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/products/${id}`);
                reset(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [id]);
    return (
        <div className="">
            <h1 className="fw-bold text-uppercase text-center py-4" style={{ margin: '10px auto', width: 1000 }}>Update Product</h1>
            <Form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="py-2" {...register("name", { required: true })} type="text" placeholder="Name product..." />
                    {errors.name && <span className="fs-6 text-danger">Name is required</span>} <br />
                </Form.Group>

                <Form.Group className="mb-2 row">
                    <Form.Group className="col">
                        <Form.Label>Price</Form.Label>
                        <Form.Control className="py-2" {...register("price", { required: true })} type="number" placeholder="Price product..." />
                        {errors.price && <span className="fs-6 text-danger">Price is required</span>} <br />
                    </Form.Group>

                    <Form.Group className="col">
                        <Form.Label>Image</Form.Label>
                        <Form.Control className="py-2" id="input_image" {...register("images")} type="file" />
                        {errors.images && <span className="fs-6 text-danger">Image is required</span>} <br />
                    </Form.Group>
                </Form.Group>
                <Button type="submit" className="btn btn-success fw-bolder px-5 py-2">Update</Button>
            </Form>
        </div>
    )
}

export default ProductEdit
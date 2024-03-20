import { SubmitHandler, useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/productService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TProduct } from "../types/showName";
import { uploadImage } from "../utils/uploadImages";
import { Button, Form } from "react-bootstrap";

type FromValue = {
    name: string,
    price: number,
    images: any,
}

const ProductAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FromValue>();
    const navigate = useNavigate();

    // const [imageSrc, setImageSrc] = useState<string>("");
    // const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         const src = URL.createObjectURL(e.target.files[0]);
    //         setImageSrc(src);
    //     }
    // }
    // const [, dispatch] = useContext(ProductsContext);
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (product: Omit<TProduct, "id">) => createProduct(product),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })

    const onSubmit: SubmitHandler<FromValue> = async (data) => {
        const url = await uploadImage(data.images);
        const newProduct = { ...data, images: url };
        mutation.mutate(newProduct);

        // // const product = await createProduct(data);
        // // dispatch({ type: "CREATE_PRODUCT", payload: product });
        navigate("/products");
    }

    return (
        <div className="">
            <h1 className="fw-bold text-uppercase text-center py-4" style={{ margin: '10px auto', width: 1000 }}>Create Product</h1>
            <Form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="py-2" {...register("name", { required: true })} type="text" placeholder="Name product..." />
                    {errors.name && <span className="fs-6 text-danger">Name is required</span>} <br />
                </Form.Group>

                <Form.Group className="mb-2 row">
                    <Form.Group className="col">
                        <Form.Label>Price</Form.Label>
                        <Form.Control className="py-2" required {...register("price", { required: true })} type="number" placeholder="Price product..." />
                        {errors.price && <span className="fs-6 text-danger">Price is required</span>} <br />
                    </Form.Group>

                    <Form.Group className="col">
                        <Form.Label>Image</Form.Label>
                        <Form.Control className="py-2" id="input_image" {...register("images", { required: true })} type="file" />
                        {errors.images && <span className="fs-6 text-danger">Image is required</span>} <br />
                    </Form.Group>
                </Form.Group>

                {/* <Form.Group className="mb-2 row">
                    <Form.Group className="">
                        <Form.Label>Image</Form.Label>
                        <Form.Control className="py-2" id="input_image" {...register("images", { required: true })} type="file" />
                        {errors.images && <span className="fs-6 text-danger">Image is required</span>} <br />
                    </Form.Group>
                    <Form.Group className="col">
                        <img src={imageSrc} style={{ width: 150 }} alt="" />
                    </Form.Group>
                </Form.Group> */}
                <Button type="submit" className="btn btn-primary fw-bolder px-5 py-2">Create</Button>
            </Form>
        </div>
    )
}

export default ProductAdd
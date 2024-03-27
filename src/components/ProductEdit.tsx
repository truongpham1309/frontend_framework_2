import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useProductMutation } from '../hooks/useProductMutation';
import { useProductsQuery } from '../hooks/useProductsQuery';
import "./../css/product.module.css";
const ProductEdit = () => {

    const { id } = useParams();
    const { form, onSubmit, isPending } = useProductMutation({ type: "UPDATE" })
    const { data } = useProductsQuery(id);
    useEffect(() => {
        form.reset(data)
    }, [id, data]);
    return (
        <div className="">
            <h1 className="fw-bold text-uppercase text-center py-4" style={{ margin: '10px auto', width: 1000 }}>Update Product</h1>
            <Form className="mx-5" onSubmit={form.handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="py-2" {...form.register("name", { required: true })} type="text" placeholder="Name product..." />
                    {form.formState.errors.name && <span className="fs-6 text-danger">Name is required</span>} <br />
                </Form.Group>

                <Form.Group className="mb-2 row">
                    <Form.Group className="col">
                        <Form.Label>Price</Form.Label>
                        <Form.Control className="py-2" {...form.register("price", { required: true })} type="number" placeholder="Price product..." />
                        {form.formState.errors.price && <span className="fs-6 text-danger">Price is required</span>} <br />
                    </Form.Group>

                    <Form.Group className="col">
                        <Form.Label>Image</Form.Label>
                        <Form.Control className="py-2" id="input_image" {...form.register("image")} type="file" />
                        {form.formState.errors.image && <span className="fs-6 text-danger">Image is required</span>} <br />
                    </Form.Group>
                </Form.Group>
                <Button type="submit" className="btn btn-success fw-bolder px-5 py-2" disabled={isPending}>{isPending ? "Updating..." : "Update"}</Button>
            </Form>
        </div>
    )
}

export default ProductEdit
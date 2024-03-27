import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import { useProductMutation } from "../hooks/useProductMutation";


const ProductAdd = () => {
    const { form, onSubmit, isPending } = useProductMutation({ type: "CREATE" })

    return (
        <div className="">
            <h1 className="fw-bold text-uppercase text-center py-4" style={{ margin: '10px auto', width: 1000 }}>Create Product</h1>
            <Form className="mx-5" onSubmit={form.handleSubmit(onSubmit)}>
                <Form.Group className="mb-2">
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
                        <Form.Control className="py-2" {...form.register("image", { required: true })} type="file" />
                        {form.formState.errors.image && <span className="fs-6 text-danger">Image is required</span>} <br />
                    </Form.Group>
                </Form.Group>
                <Button type="submit" className="btn btn-primary fw-bolder px-5 py-2" disabled={isPending} >{isPending ? "Creating..." : "Create"}</Button>
            </Form>
        </div>
    )
}

export default ProductAdd
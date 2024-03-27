import Product from "./Product";
import "./../css/product.module.css";
import { TProduct } from "../types/showName";
import LoadingComponent from "./LoadingComponent";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useProductsQuery } from "../hooks/useProductsQuery";

const ProductsList = () => {

    // const [products, dispatch] = useContext(ProductsContext);
    // useEffect(() => {
    //     (async () => {
    //         const data = await getAllProducts();
    //         dispatch({ type: "SET_PRODUCT", payload: data });
    //     })()
    // }, [])

    const { data: products, isLoading, isError } = useProductsQuery()

    if (isLoading) return (<><LoadingComponent /></>)
    if (isError) return (<>Error</>)
    return (
        <>
            <h1 className="fw-bold text-uppercase text-center py-5" style={{ margin: '10px auto', width: 1000 }}>Products List </h1>
            <div style={{ margin: '10px auto', width: 1000 }}>
                <Link to={"/products/add"}><Button className="btn btn-success fw-bold my-2">ADD PRODUCT</Button></Link>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center text-uppercase text-xs fs-6">#</th>
                            <th className="text-center text-uppercase text-xs fs-6">name</th>
                            <th className="text-center text-uppercase text-xs fs-6">price</th>
                            <th className="text-center text-uppercase text-xs fs-6">image</th>
                            <th className="text-center text-uppercase text-xs fs-6">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item: TProduct, index: number) => (
                            <Product key={index} product={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductsList
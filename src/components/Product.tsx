import React, { useContext } from "react"
import { TProduct } from "../types/showName"
import { Link } from "react-router-dom"
import { deleteProductByID } from "../services/productService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "react-bootstrap"
import { useProductMutation } from "../hooks/useProductMutation"

type PropsProduct = {
  product: TProduct,
}

const Product = ({ product }: PropsProduct): React.JSX.Element => {
  const { mutate: deleteProduct } = useProductMutation({ type: "DELETE" })

  return (
    <>
      <tr>
        <td className="text-center ">{product.id}</td>
        <td className="text-center ">{product.name}</td>
        <td className="text-center ">{product.price}</td>
        <td className="text-center "><img src={(product.image as string)} style={{ width: 100 }} alt="image not found" /></td>
        <td className="px-auto d-flex align-items-center justify-content-center ">
          <div>
            <Link to={`/products/${product.id}/edit`}><Button className="btn btn-success mx-2 px-2">Edit</Button></Link>
            <Button className="btn btn-danger mx-2 px-2" onClick={() => deleteProduct(product)}>Remove</Button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default Product
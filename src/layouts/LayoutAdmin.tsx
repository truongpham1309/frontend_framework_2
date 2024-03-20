import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"

const LayoutAdmin = () => {
  return (
    <>
        <Outlet /> 
        <ToastContainer />
    </>
  )
}

export default LayoutAdmin
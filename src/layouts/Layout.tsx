import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import 'aos/dist/aos.css';

const Layout = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
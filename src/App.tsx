import './App.css'
import Layout from './layouts/Layout';
import ProductsList from './components/ProductsList';
import ProductAdd from './components/ProductAdd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/views/HomePage';
import ArticlesPage from './pages/views/ArticlesPage';
import LayoutAdmin from './layouts/LayoutAdmin';
import ProductEdit from './components/ProductEdit';
import Count from './components/ShowName';
import { configUseAxios } from './config/axios';


function App() {
  configUseAxios();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<HomePage />} />
            <Route path='/articles' element={<ArticlesPage />} />
          </Route>

          <Route path='/' element={<LayoutAdmin />} >
            <Route path='/products' element={<ProductsList />} />
            <Route path='/products/add' element={<ProductAdd />} />
            <Route path='/products/:id/edit' element={<ProductEdit />} />
            <Route path='/admin' element={<HomePage />} />

            <Route path='/count' element={<Count />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

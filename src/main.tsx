import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import React from 'react';
import ProductsContextProvider from './contexts/productsContextReducer/ProductsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();
const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

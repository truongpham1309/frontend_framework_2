import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import React from 'react';
import ProductsContextProvider from './contexts/productsContextReducer/ProductsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/productRedux/store';


const queryClient = new QueryClient();
const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductsContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProductsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

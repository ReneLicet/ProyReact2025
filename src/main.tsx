
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/index.tsx';
import ProductDetail from './pages/ProductDetail/index.tsx';
import Home2 from './pages/Home/index2.tsx';
import { ShoppingCartProvider } from './context/index.tsx';
import ItemDetail from './pages/ItemDetail/index.tsx';

createRoot(document.getElementById('root')!).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  </ShoppingCartProvider>
)

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import EcommerceUI from "./components/products";
import Home from "./components/home";
import Modal from "./components/modals"; // Make sure you import Modal
import { products } from "./components/listing-objects";

function ProductsPage({ onAddToCart }) {
  return <EcommerceUI products={products} onAddToCart={onAddToCart} />;
}

function Cart() {
  return <h1 className="text-center mt-10">Cart Page</h1>;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen mx-0 lg:mx-50">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductsPage onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>




      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedProduct && (
          <div>
            <div className="text-xl font-semibold mb-2">
              <p className="font-black">{selectedProduct.name} Added!</p>
            </div>
            <p className="mb-4">Price: {selectedProduct.price}</p>
            <img src={selectedProduct.image[`clothing${selectedProduct.id}`]} alt={selectedProduct.name} className="w-full mb-4" />
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
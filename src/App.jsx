import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import EcommerceUI from "./components/products";
import Home from "./components/home";
import Modal from "./components/modals";
import { products } from "./components/listing-objects";
import { ProductList } from "./components/listing-objects";

function ProductsPage({ products, onAddToCart, list, onClearItem, onClearAll }) {
  return (
    <EcommerceUI
      products={products}
      onAddToCart={onAddToCart}   // <-- this must match
      list={list}
      onClearItem={onClearItem}
      onClearAll={onClearAll}
    />
  );
}

function Cart() {
  return <h1 className="text-center mt-10">Cart Page</h1>;
}

function App() {
  // Cart state
  const [list, setList] = useState([]);

  // Remove single item
  const handleClearItem = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all items
  const handleClearAll = () => {
    setList([]);
  };

  // Add product to cart
  const handleAddItemToList = (product) => {
    setList((prev) => [...prev, product]);
    setIsModalOpen(false); // close modal after adding
  };

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
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
            element={
              <ProductsPage
                products={products}
                onAddToCart={handleAddToCart}
                list={list}
                onClearItem={handleClearItem}
                onClearAll={handleClearAll}
              />
            }
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
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full mb-4"
            />

            <ul className="flex flex-wrap justify-center gap-2 mt-2">
              {selectedProduct.sizes.map((size) => (
                <li
                  key={size}
                  className="px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-800 font-medium cursor-pointer
                 hover:bg-sky-200 dark:border-sky-500/30 dark:bg-sky-800/20 dark:text-sky-300 dark:hover:bg-sky-700/30
                 transition-colors"
                >
                  {size}
                </li>
              ))}
            </ul>
            <p className="mb-4">{selectedProduct.description}</p>

            <button
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 w-full mb-2"
              onClick={() => handleAddItemToList(selectedProduct)}
            >
              Add to Cart
            </button>

            <button
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 w-full"
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
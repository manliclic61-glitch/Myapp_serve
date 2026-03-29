import { useState } from "react";
import "./App.css";
import logo_1_hero from "./assets/logo_1_hero.png";
import logo_2_hero from "./assets/logo_2_hero.png";
import hero_1_logo_doodle from "./assets/hero_1_logo_doodle.jpg";
export default function EcommerceUI() {
  const products = [
    { id: 1, name: "Headphones", price: "$99" },
    { id: 2, name: "Keyboard", price: "$79" },
    { id: 3, name: "Mouse", price: "$49" },
    { id: 4, name: "Monitor", price: "$199" },
  ];

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen mx-0 lg:mx-50">
      {/* Navbar */}
      <div className="border-b border-gray-800 px-6 py-4 flex justify-between items-center shadow-lg ">
        <img src={logo_1_hero} alt="Logo" className="h-10" />
        <div className="space-x-4 text-gray-400">
          <button>Home</button>
          <button>Products</button>
          <button>Cart</button>
        </div>
      </div>

      {/* Hero */}
      <div className="items-center justify-center text-center">
        <img src={hero_1_logo_doodle} alt="Hero" className="w-full" />
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-gray-800">
        {products.map((product) => (
          <div key={product.id} className="p-6 hover:bg-gray-900 transition">
            <div className="h-40 bg-gray-800 mb-4 flex items-center justify-center">
              Image
            </div>
            <h3 className="text-lg">{product.name}</h3>
            <p className="text-gray-400">{product.price}</p>
            <button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 text-center py-6 text-gray-400">
        © 2026 MyShop. All rights reserved.
      </div>
    </div>
  );
}

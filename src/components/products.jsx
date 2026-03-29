import "../App.css";
import { useState } from "react";





export default function EcommerceUI({ products, onAddToCart }) {
  return (



    <div className="flex lg:inline-flex gap-10 p-5 divide-gray-800">
      
      <div className="p-5 divide-gray-800  lg:w-80 sm:w-60 md:w-70">
        <h1 className="text-4xl font-bold">Filter By</h1>
      
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="card p-6 hover:bg-gray-900 transition shadow-xl/30">
            <div className="h-40 bg-gray-800 mb-4 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="max-h-full w-full" />
            </div>
            <h3 className="text-lg">{product.name}</h3>
            <p className="text-gray-400">{product.price}</p>
            <button
              className="mt-3 w-full max-w-xs bg-purple-600 hover:bg-purple-700 py-2 rounded text-white"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>


    </div>

  );
}
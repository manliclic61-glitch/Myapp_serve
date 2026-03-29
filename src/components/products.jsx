import "../App.css";

export default function EcommerceUI({ products, onAddToCart }) {
  return (



    <>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-gray-800">
        {products.map((product) => (
          <div key={product.id} className="p-6 hover:bg-gray-900 transition">
            <div className="h-40 bg-gray-800 mb-4 flex items-center justify-center">
              <img src={product.image[`clothing${product.id}`]} alt={product.name} className="max-h-full w-full" />
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


    </>

  );
}
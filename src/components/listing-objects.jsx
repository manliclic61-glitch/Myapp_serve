
import clothing1 from "../assets/clothing1.jpg"; // adjust the path to your image
import clothing2 from "../assets/clothing2.jpg"; // adjust the path to your image
import clothing3 from "../assets/clothing3.jpg"; // adjust the path to your image
import clothing4 from "../assets/clothing4.jpg"; // adjust the path to your image
export const products = [
  { id: 1, name: "shirt1", price: "₱99", image: clothing1, description: "A stylish shirt made from high-quality materials. Perfect for any occasion." , sizes: ["S", "M", "L", "XL"]},
  { id: 2, name: "shirt2", price: "₱79", image: clothing2, description: "A comfortable shirt ideal for everyday wear.", sizes: ["S", "M", "L", "XL"]},
  { id: 3, name: "shirt3", price: "₱49", image: clothing3, description: "A versatile shirt that pairs well with various outfits.", sizes: ["S", "M", "L", "XL"] },
  { id: 4, name: "shirt4", price: "₱199", image: clothing4, description: "A premium shirt crafted with attention to detail.", sizes: ["S", "M", "L", "XL"] },
  { id: 5, name: "shirt5", price: "₱149", image: clothing1, description: "A classic shirt with a modern twist.", sizes: ["S", "M", "L", "XL"] }
];


export const list_objects = [
  { id: 1, name: "Headphones", price: "₱99", image: { clothing1 } },
  { id: 2, name: "Keyboard", price: "₱79", image: { clothing2 } }
];

export function ProductList({ list = [], onClearItem, onClearAll }) {
  const totalPrice = list.reduce((total, item) => {
    const price = parseFloat(item.price.replace("₱", ""));
    return total + price;
  }, 0);
  return (
    <div className="mb-6 rounded">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Cart Items</h2>
        <button
          onClick={onClearAll}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Clear All
        </button>
      </div>

      {list.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <ul>
          {list.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-1 bg-gray-900 p-2 rounded"
            >
              <span>
                {item.name} - <span className="text-gray-400">{item.price}</span>
              </span>
              <button
                onClick={() => onClearItem(item.id)}
                className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>



      )}

      {totalPrice > 0 && (
        <div className="mt-4 text-right">
          <span className="text-lg font-bold">Total: ₱{totalPrice.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}
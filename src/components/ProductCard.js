import { Link } from "react-router-dom";
import '../styles/ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="border product-grid rounded-xl p-4 hover:shadow-md">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
      <p className="text-blue-600 font-bold">${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-2 button-style bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
} 

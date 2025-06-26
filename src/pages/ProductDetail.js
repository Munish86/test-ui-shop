import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import '../styles/Productdetail.css';



export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="p-6">Loading...</div>;

  const handleAddToCart = () => {
  addToCart(product);                    // cart mein add
  setMessage("✔️ Item added to cart!");  // message dikhao
  setTimeout(() => setMessage(""), 2000); // 2 sec baad gayab
};



  return (
    <div className="p-6 grid preview grid-cols-1 md:grid-cols-2 gap-6">
      <img src={product.image} alt={product.title} className="h-64 object-contain" />
      <div>
        <h1 className="text-2xl preview-h1 font-bold">{product.title}</h1>
        <p className="text-lg preview-p text-blue-600 font-semibold">${product.price}</p>
        <p className="my-4 text-gray-700">{product.description}</p>



        <button
  onClick={handleAddToCart}
  className="bg-blue-600 preview-button text-white px-4 py-2 rounded hover:bg-blue-700"
>
  Add to Cart
</button>

{message && (
  <p className="text-green-600 font-medium mt-2">{message}</p>
)}

      </div>
    </div>
  );
}

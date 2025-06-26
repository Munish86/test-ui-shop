import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import '../styles/Cart.css';

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <table className="w-full border cart-design">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 cart-design text-left">Product</th>
                <th className="p-2 cart-design">Price</th>
                <th className="p-2 cart-design">Qty</th>
                <th className="p-2 cart-design">Subtotal</th>
                <th className="p-2 cart-design">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">${item.price}</td>
                  <td className="p-2">
                    <input
                      type="number"
                      value={item.qty}
                      min={1}
                      className="w-16 border rounded px-1 py-0.5"
                      onChange={(e) => updateQty(item.id, e.target.value)}
                    />
                  </td>
                  <td className="p-2 font-semibold">${(item.price * item.qty).toFixed(2)}</td>
                  <td className="p-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

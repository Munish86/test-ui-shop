import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/Checkout.css';


export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Fake validation
    if (!form.name || !form.address || !form.email) {
      alert("Please fill all fields");
      return;
    }

    // Simulate order placed
    navigate("/thank-you");
  };

  return (
    <div className="p-6 checkout-design grid md:grid-cols-2 gap-6">
      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <h2 className="text-xl checkout-design font-semibold">Billing Details</h2>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows={4}
        />

        <button
          type="submit"
          className="bg-green-600 checkout-design text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>

      {/* Order Summary */}
      <div className="bg-gray-50 p-4 checkout-design rounded-xl shadow-sm">
        <h3 className="text-lg checkout-design font-semibold mb-4">Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2 text-sm">
            <span>{item.title} x {item.qty}</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
        <hr className="my-2" />
        <p className="text-right checkout-design font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

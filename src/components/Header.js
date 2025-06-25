import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Mittiraah Store</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/cart" className="hover:text-blue-500">Cart</Link>
      </nav>
    </header>
  );
}

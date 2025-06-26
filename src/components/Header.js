import { Link } from "react-router-dom";
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="text-xl logo-color font-bold text-blue-200">Flex Clothing Store</Link>
      </div>

      <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/shop" className="hover:text-blue-500">Shop</Link>
        <Link to="/blog" className="hover:text-blue-500">Blog</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        <Link to="/cart" className="hover:text-blue-500">Cart</Link>
      </nav>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
}

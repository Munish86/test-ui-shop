import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" className="text-xl font-bold text-gray-700">Flex Store</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/shop" className="nav-item">Shop</Link>
          <Link to="/blog" className="nav-item">Blog</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          <Link to="/cart" className="nav-item">Cart</Link>
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-full px-2 py-1 bg-gray-100 w-64">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm flex-grow px-2"
          />
          <button className="text-white bg-pink-500 px-3 py-1 rounded-full text-sm">Search</button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
        <div className="flex justify-end p-4">
          <button className="text-2xl" onClick={() => setMobileMenuOpen(false)}>×</button>
        </div>
        <nav className="flex flex-col px-6 gap-4 text-gray-800 font-semibold">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart</Link>
        </nav>
      </div>
    </>
  );
}

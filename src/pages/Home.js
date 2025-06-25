import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Filter + Sort logic
  let displayedProducts = [...products];

  if (category) {
    displayedProducts = displayedProducts.filter(p => p.category === category);
  }

  if (sort === "price-asc") {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    displayedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    displayedProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Pagination
  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const paginatedProducts = displayedProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="p-6">
      <div className="mb-4 flex gap-4">
        <select onChange={e => setCategory(e.target.value)} className="border p-2 rounded">
          <option value="">All Categories</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
        <select onChange={e => setSort(e.target.value)} className="border p-2 rounded">
          <option value="">Sort</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paginatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

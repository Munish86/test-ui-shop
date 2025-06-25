import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import FiltersSidebar from "../components/Filters";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const applyFilters = ({ categories, minPrice, maxPrice }) => {
    let result = [...products];
    if (categories?.length) result = result.filter(p => categories.includes(p.category));
    if (minPrice) result = result.filter(p => p.price >= parseFloat(minPrice));
    if (maxPrice) result = result.filter(p => p.price <= parseFloat(maxPrice));
    setFiltered(result);
    setPage(1);
  };

  const applySorting = (value) => {
    setSort(value);
    let sorted = [...filtered];
    if (value === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (value === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (value === "name") sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (value === "popularity") sorted.sort((a, b) => b.rating?.rate - a.rating?.rate);
    setFiltered(sorted);
  };

  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const paginatedProducts = filtered.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="p-6 md:flex gap-6">
      <FiltersSidebar onFilter={applyFilters} onSort={applySorting} />

      <div className="flex-1">
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
    </div>
  );
}
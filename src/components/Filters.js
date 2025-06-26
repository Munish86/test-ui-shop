import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import '../styles/Filters.css';


const categories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];

export default function FiltersSidebar({ onFilter, onSort }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    onFilter({
      categories: selectedCategories,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories, priceRange]);

  useEffect(() => {
    onSort(sortValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortValue]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="space-y-6 filter-design w-full md:w-64">
      {/* Box 1: Category Filter */}
      <div className="bg-white filter-category p-4 shadow rounded-xl">
        <h3 className="font-bold text-lg mb-2">Category</h3>
        {categories.map((cat) => (
          <label key={cat} className="block mb-1 text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Box 2: Price Range */}
      <div className="bg-white p-4 shadow rounded-xl">
        <h3 className="font-bold text-lg mb-2">Price Range</h3>
        <ReactSlider
          className="h-2 bg-gray-300 rounded"
          thumbClassName="h-4 w-4 bg-blue-600 rounded-full cursor-pointer"
          trackClassName="bg-blue-500 h-2 rounded"
          value={priceRange}
          min={0}
          max={150}
          onChange={setPriceRange}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Box 3: Sort Options */}
      <div className="bg-white p-4 shadow rounded-xl">
        <h3 className="font-bold text-lg mb-2">Sort By</h3>
        <select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name A-Z</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>
  );
}
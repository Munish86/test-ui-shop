import '../styles/SortDropdown.css';


export default function SortDropdown({ onSort }) {
  return (
    <div className="flex justify-end mb-4">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="border sort-Design rounded px-3 py-2"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Name A-Z</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
}

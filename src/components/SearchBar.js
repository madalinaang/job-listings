import FilterSearch from "./FilterSearch";

export default function SearchBar({ filters, removeFilter, clearFilters }) {
  const handleClick = () => {
    clearFilters();
  };

  return (
    <div className="search-bar">
      <div className="searched-filters">
        {filters.map((item) => (
          <FilterSearch text={item} removeFilter={removeFilter} />
        ))}
      </div>
      <div className="clear" onClick={handleClick}>
        Clear
      </div>
    </div>
  );
}

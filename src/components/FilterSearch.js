export default function FilterSearch({ text, removeFilter }) {
  const handleClick = () => {
    removeFilter(text);
  };

  return (
    <div className="filter-search">
      <p className="text-filter">{text}</p>
      <div className="delete-button" onClick={handleClick}>
        &#10006;
      </div>
    </div>
  );
}

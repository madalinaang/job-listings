export default function Filter({ text, addFilter }) {
  const handleClick = () => {
    addFilter(text);
  };

  return (
    <div className="filter" onClick={handleClick}>
      {text}
    </div>
  );
}

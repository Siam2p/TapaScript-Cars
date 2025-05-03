

function SearchBox({ searchTerm, onSearchCar }) {
  return (
    <input 
      value={searchTerm}
      onChange={(event) => onSearchCar(event.target.value)}
      placeholder="Search cars..."
      type="text"
      className="border border-gray-400 p-2 mr-2 w-xs rounded-md"
    />
  )
}

export default SearchBox

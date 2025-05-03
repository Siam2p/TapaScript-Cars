import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";

function SearchArea({ searchTerm, onSearchCar, onPremiumCars }) {
  return (
    <div className="flex mb-4">
      <SearchBox searchTerm={searchTerm} onSearchCar={onSearchCar}/>
      <FilterBox onPremiumCars={onPremiumCars}/>
    </div>
  )
}

export default SearchArea

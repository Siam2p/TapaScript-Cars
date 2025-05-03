

function FilterBox({ onPremiumCars }) {
  return (
    <form className="p-2 font-medium flex items-center">
      <input
      onChange={(event) => onPremiumCars(event.target.checked)}
      className="text-2xl w-4 h-4 border-amber-500 mr-2" type="checkbox" name="premium" id="premium-checkbox" />
      <label for="premium-checkbox">Show Premium Only</label>
    </form>
  )
}

export default FilterBox

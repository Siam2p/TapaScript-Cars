import CarDetails from "./CarDetails";

function CarRow({car}) {
  return (
    <div className="shadow p-4 border cursor-pointer border-gray-200 rounded-lg">
      <CarDetails car={car}/>
    </div>
  )
}

export default CarRow

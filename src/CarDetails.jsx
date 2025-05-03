

function CarDetails({car}) {
  return (
    <div>
      <h1 className="text-lg font-semibold">{car.title}</h1>
      <p className="font-semibold">Brand: <span className="font-normal">{car.brand}</span></p>
      <p className="font-semibold">Year: <span className="font-normal">{car.year}</span></p>
      <p className="font-semibold">Price: <span className="font-normal">${car.price.toLocaleString()}</span></p>
      <p className="font-semibold">Premium: <span className="font-normal">{car.isPremium ? "Yes" : "No"}</span></p>
    </div>
  )
}

export default CarDetails

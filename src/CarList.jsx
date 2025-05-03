import CarRow from "./CarRow";

function CarList({searchTerm, cars}) {

  let car = [];

  cars.forEach(element => {
    if (element.title.toLowerCase().indexOf(searchTerm.toLowerCase())===-1) {
      return;
    }
    car.push(<CarRow key={element.id} car={element} />);
  });
  return (

    <ul className="grid grid-cols-3 gap-4">        
      {car}
    </ul>
    // <ul className="grid grid-cols-3 gap-4">
    //   {cars.map((car) => (
    //     <li className="shadow p-4 border cursor-pointer border-gray-200 rounded-lg"
    //     key={car.id}>
    //       <CarRow car={car} />
    //     </li>
    //   ))}
    // </ul>
  );
}

export default CarList;

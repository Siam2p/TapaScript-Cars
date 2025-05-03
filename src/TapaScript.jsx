import React, { useState } from "react";
import Header from "./Header";
import SearchArea from "./SearchArea";
import CarList from "./CarList";

function TapaScript() {

  function generateCars(num) {
    const brands = ["Mercedes", "Toyota", "Porsche", "Nissan", "BMW", "Honda", "Ford", "Chevrolet", "Audi", "Lexus", "Hyundai", "Mazda", "Jeep", "Tesla", "Volvo"];
    const titles = ["Luxury Sedan", "Family SUV", "Sports Car", "Electric Hatchback", "Luxury SUV", "Compact Car", "Convertible", "Off-Road Truck", "Hybrid Sedan", "Coupe", "Minivan", "Pickup Truck", "Crossover"];
    
    let cars = [];
    
    for (let i = 1; i <= num; i++) {
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const title = titles[Math.floor(Math.random() * titles.length)];
        const year = Math.floor(Math.random() * 6) + 2019; // Random year between 2019 and 2024
        const price = Math.floor(Math.random() * 100000) + 15000; // Random price between 15000 and 115000
        const isPremium = price > 60000; // If price is above 60000, it's premium
        
        cars.push({ id: i, title, brand, year, price, isPremium });
    }
    
    return cars;
}

const CARS1 = generateCars(1000-1);

// console.log(CARS);


const CARS = [
  // 2000-2005 Examples:
  { id: 1, title: "Camry", brand: "Toyota", year: 2000, price: 18000, isPremium: false},
  { id: 2, title: "Civic", brand: "Honda", year: 2003, price: 16500, isPremium: false},
  { id: 3, title: "E-Class", brand: "Mercedes", year: 2002, price: 48000, isPremium: true},
  { id: 4, title: "F-150", brand: "Ford", year: 2005, price: 25000, isPremium: false},
  { id: 5, title: "911", brand: "Porsche", year: 2004, price: 75000, isPremium: true},

  // 2006-2010 Examples:
  { id: 6, title: "Prius", brand: "Toyota", year: 2008, price: 22000, isPremium: false},
  { id: 7, title: "3 Series", brand: "BMW", year: 2007, price: 38000, isPremium: true},
  { id: 8, title: "Suburban", brand: "Chevrolet", year: 2010, price: 50000, isPremium: false},
  { id: 9, title: "Outback", brand: "Subaru", year: 2009, price: 25000, isPremium: false},
  { id: 10, title: "A4", brand: "Audi", year: 2010, price: 35000, isPremium: true},
  { id: 11, title: "Model S", brand: "Tesla", year: 2013, price: 75000, isPremium: true},
  { id: 12, title: "RAV4", brand: "Toyota", year: 2014, price: 26000, isPremium: false},
  { id: 13, title: "Mustang", brand: "Ford", year: 2015, price: 30000, isPremium: false},
  { id: 14, title: "X5", brand: "BMW", year: 2012, price: 60000, isPremium: true},
  { id: 15, title: "Leaf", brand: "Nissan", year: 2015, price: 30000, isPremium: false},
  { id: 16, title: "Model 3", brand: "Tesla", year: 2018, price: 45000, isPremium: true},
  { id: 17, title: "CR-V", brand: "Honda", year: 2019, price: 28000, isPremium: false},
  { id: 18, title: "Silverado", brand: "Chevrolet", year: 2020, price: 40000, isPremium: false},
  { id: 19, title: "Cayenne", brand: "Porsche", year: 2017, price: 70000, isPremium: true},
  { id: 20, title: "Bolt EV", brand: "Chevrolet", year: 2019, price: 35000, isPremium: false},
  { id: 21, title: "Model Y", brand: "Tesla", year: 2022, price: 60000, isPremium: true},
  { id: 22, title: "Bronco", brand: "Ford", year: 2023, price: 45000, isPremium: false},
  { id: 23, title: "Taycan", brand: "Porsche", year: 2023, price: 90000, isPremium: true},
  { id: 24, title: "Ariya", brand: "Nissan", year: 2022, price: 40000, isPremium: false},
  { id: 26, title: "Benz Patent-Motorwagen", brand: "Benz", year: 1886, price: 20000, isPremium: false },
  { id: 27, title: "Ford Quadricycle", brand: "Ford", year: 1896, price: 34000, isPremium: false },
  { id: 28, title: "Oldsmobile Curved Dash", brand: "Oldsmobile", year: 1901, price: 9000, isPremium: false },
  { id: 29, title: "Ford Model T", brand: "Ford", year: 1908, price: 33200, isPremium: false },
  { id: 30, title: "Cadillac Type 51", brand: "Cadillac", year: 1915, price: 43500, isPremium: true },
  { id: 31, title: "Duesenberg Model J", brand: "Duesenberg", year: 1928, price: 96000, isPremium: true },
  { id: 32, title: "Volkswagen Beetle", brand: "Volkswagen", year: 1938, price: 4000, isPremium: false },
  { id: 33, title: "Jeep Willys MB", brand: "Willys", year: 1941, price: 100200, isPremium: false },
  { id: 34, title: "Chevrolet Bel Air", brand: "Chevrolet", year: 1950, price: 43200, isPremium: false },
  { id: 35, title: "Mercedes-Benz 300SL", brand: "Mercedes-Benz", year: 1954, price: 87000, isPremium: true },
  { id: 36, title: "Ford Mustang", brand: "Ford", year: 1964, price: 40080, isPremium: false },
  { id: 37, title: "Mini Cooper", brand: "Mini", year: 1959, price: 95400, isPremium: false },
  { id: 38, title: "Porsche 911", brand: "Porsche", year: 1963, price: 8000, isPremium: true },
  { id: 39, title: "Toyota Corolla", brand: "Toyota", year: 1966, price: 5000, isPremium: false },
  { id: 40, title: "E-Class", brand: "Mercedes", year: 2002, price: 48000, isPremium: true },
  { id: 41, title: "Honda Civic", brand: "Honda", year: 1972, price: 9030, isPremium: false },
  { id: 42, title: "BMW 3 Series", brand: "BMW", year: 1975, price: 1200, isPremium: true },
  { id: 43, title: "Chevrolet Corvette", brand: "Chevrolet", year: 1953, price: 8000, isPremium: true },
  { id: 44, title: "Mercedes-Benz S-Class", brand: "Mercedes-Benz", year: 1972, price: 3200, isPremium: true },
  { id: 45, title: "Audi Quattro", brand: "Audi", year: 1980, price: 7000, isPremium: true },
  { id: 46, title: "Mazda MX-5 Miata", brand: "Mazda", year: 1989, price: 5000, isPremium: false },
  { id: 47, title: "Land Rover Defender", brand: "Land Rover", year: 1983, price: 8000, isPremium: false },
  { id: 48, title: "Subaru Impreza", brand: "Subaru", year: 1992, price: 1400, isPremium: false },
  { id: 49, title: "Camry", brand: "Toyota", year: 2000, price: 18000, isPremium: false },
  { id: 50, title: "Civic", brand: "Honda", year: 2003, price: 16500, isPremium: false },
  { id: 51, title: "Highlander", brand: "Toyota", year: 2023, price: 42000, isPremium: false},
];

  const [cars, setCars] = useState(CARS);
  const [searchTerm, setSearchTerm] = useState("");

  const premiumCars = (checkbox) => {
    setCars(checkbox ? CARS.filter((car) => car.isPremium === true) : CARS);
  }

  return (
    <div className="container p-20">
      <Header />
      <SearchArea searchTerm={searchTerm} onSearchCar={setSearchTerm} onPremiumCars={premiumCars}/>
      <CarList searchTerm={searchTerm} cars = {cars}/>
    </div>
  )
}

export default TapaScript;

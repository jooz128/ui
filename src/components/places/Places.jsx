import { useState } from 'react';
import slided from "../../assets/popular.png"
import smallslided from '../../assets/topactivities.png'

function Second() {
    const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5);
  };

  const activities = [
    { name: "Activity 1", image: smallslided },
    { name: "Activity 2", image: smallslided },
    { name: "Activity 3", image: smallslided },
    { name: "Activity 4", image: smallslided },
    { name: "Activity 5", image: smallslided },
  ];
  return (
    <div className="max-w-full overflow-hidden relative flex justify-center items-center mt-4">
      <div className="w-full overflow-hidden flex flex-col items-center pr-6">
        <h1 className="text-red-500 text-lg font-bold mb-6 md:text-4xl">POPULAR PLACES</h1>
        <div className="flex flex-col justify-center items-center md:flex md:flex-row ">
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-90 h-auto"
              src={slided}
              alt="Slider"
            />
            <p className="text-center text-lg font-bold ">Hiking</p>
            <p className="text-center  mt-1">Reviews: 5 stars</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-90 h-auto"
              src={slided}
              alt="Slider"
            />
            <p className="text-center text-lg font-bold ">Skiing</p>
            <p className="text-center  mt-1">Reviews: 4.5 stars</p>
          </div>
        </div>
        <h1 className="text-red-500 text-lg font-bold mt-8 mb-6 md:text-4xl">Top Activities</h1>
        <div className="flex justify-center">
          {/* Add five larger images and corresponding text here */}
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-56 h-auto"
              src={smallslided}
              alt="Activity 1"
            />
            <p className="text-center text-lg font-bold mt-2">Activity 1</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-56 h-auto"
              src={smallslided}
              alt="Activity 2"
            />
            <p className="text-center text-lg font-bold mt-2">Activity 2</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-56 h-auto"
              src={smallslided}
              alt="Activity 3"
            />
            <p className="text-center text-lg font-bold mt-2">Activity 3</p>
          </div>
          <div className="flex flex-col items-center mx-4">
            <img
              className="transition-transform duration-300 ease-in-out block w-56 h-auto"
              src={smallslided}
              alt="Activity 4"
            />
            <p className="text-center text-lg font-bold mt-2">Activity 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;

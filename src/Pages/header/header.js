

// import React from 'react';
// import { FaArrowRight } from 'react-icons/fa'; // Ensure you have react-icons installed

// const HeroSection = () => {
//   return (
//     <section className="bg-#121212 text-white h-screen flex flex-col justify-center items-center text-center px-8">
//       <h1 className="text-4xl font-extrabold mb-6 tracking-tight leading-tight transition duration-300 transform hover:scale-105">
//         Welcome to the Future of <span className="text-purple-600">Smart Benches</span>
//       </h1>
//       <p className="text-lg mb-8 max-w-2xl mx-auto font-serif opacity-90 hover:opacity-100 transition duration-300">
//         Experience the perfect blend of comfort and technology with our revolutionary smart benches.
//       </p>
//       <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold tracking-wider shadow-md hover:bg-purple-600 hover:shadow-sm hover:shadow-purple-600/50 hover:scale-105 transition duration-300 flex items-center space-x-3">
//         <span>Try Now</span>
//         <FaArrowRight className="text-white text-xl" />
//       </button>
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Ensure you have react-icons installed
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Transaction'); // This is where you want to navigate to
  };

  return (
    <section className="bg-[#121212] text-white h-screen flex flex-col justify-center items-center text-center px-8 mb-6">
      <h1 className="text-4xl font-extrabold mb-6 tracking-tight leading-tight transition duration-300 transform hover:scale-105">
        Welcome to the Future of <span className="text-purple-600">Smart Benches</span>
      </h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto font-serif opacity-90 hover:opacity-100 transition duration-300">
        Experience the perfect blend of comfort and technology with our revolutionary smart benches.
      </p>
      <button
        onClick={handleClick}
        className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold tracking-wider shadow-md hover:bg-purple-600 hover:shadow-sm hover:shadow-purple-600/50 hover:scale-105 transition duration-300 flex items-center space-x-3"
      >
        <span>Try Now</span>
        <FaArrowRight className="text-white text-xl" />
      </button>
    </section>
  );
};

export default HeroSection;

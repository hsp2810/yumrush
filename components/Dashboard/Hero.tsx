import React from "react";

const HeroSection = () => {
  return (
    <section className='bg-white text-center min-h-[90vh] flex flex-col justify-center'>
      <div className=' w-7/12 mx-auto px-4'>
        <h1
          style={{
            backgroundImage: "linear-gradient(to right, #FFA500, #FF6347)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className='text-9xl font-extrabold mb-4'
        >
          Welcome to YumRush
        </h1>
        <p className='text-lg mb-8 text-gray-700'>
          Your one-stop destination for delicious and convenient food ordering.
        </p>
        <div className='flex justify-center space-x-4'>
          <a
            href='#'
            className='bg-orange-500 text-white hover:bg-orange-600 py-2 px-6 rounded-full text-lg font-medium transition duration-300'
          >
            View restaurants nearby
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

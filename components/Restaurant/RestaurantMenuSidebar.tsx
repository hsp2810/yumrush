import React from "react";

type PageProps = {
  scrollToSection: any;
  startersRef: React.RefObject<HTMLDivElement>;
  mainCourseRef: React.RefObject<HTMLDivElement>;
  dessertsRef: React.RefObject<HTMLDivElement>;
};

const RestaurantMenuSidebar = ({
  scrollToSection,
  startersRef,
  mainCourseRef,
  dessertsRef,
}: PageProps) => {
  return (
    <div className='pt-[2rem] bg-orange-50 rounded-lg mx-3 mt-3 flex-[15] h-[78vh]'>
      <h2 className='text-2xl font-semibold mb-2 text-center'>Categories</h2>
      <ul className='space-y-5 flex flex-col items-center mt-10'>
        <li>
          <button
            className='text-lg text-orange-500 hover:text-orange-600 cursor-pointer'
            onClick={() => scrollToSection(startersRef)}
          >
            Starters
          </button>
        </li>
        <li>
          <button
            className='text-lg text-orange-500 hover:text-orange-600 cursor-pointer'
            onClick={() => scrollToSection(mainCourseRef)}
          >
            Main Course
          </button>
        </li>
        <li>
          <button
            className='text-lg text-orange-500 hover:text-orange-600 cursor-pointer'
            onClick={() => scrollToSection(dessertsRef)}
          >
            Desserts
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMenuSidebar;

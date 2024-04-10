import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowLeftRight, BsFilter } from "react-icons/bs";

interface SearchProps {
  inputRes: string;
  setInputRes: Dispatch<SetStateAction<string>>;
}

const DishSearch: React.FC<SearchProps> = ({ inputRes, setInputRes }) => {
  const router = useRouter();
  const { search } = router.query;
  const [isFilterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    // Filter when the url field changes
    
  }, [search]);

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setInputRes("");
    router.push(`?search=${inputRes}`);
  };

  const toggleFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFilterOpen(!isFilterOpen);
  };

  return (
    <div className='relative flex mb-4 mt-4'>
      <input
        type='text'
        id='food'
        className='w-full border-2 border-orange-500 text-gray-600 rounded-md py-2 px-3 focus:outline-none '
        placeholder={`Search dishes...`}
        value={inputRes}
        onChange={(e: any) => setInputRes(e.target.value)}
      />
      <button
        className='block text-center text-xl bg-orange-500 text-white p-3 ml-1 rounded-md hover:bg-orange-600 transition duration-300 font-medium'
        onClick={handleSearch}
      >
        <AiOutlineSearch />
      </button>
      <button
        className='block text-center text-xl bg-slate-500 text-white p-3 ml-1 rounded-md hover:bg-slate-600 transition duration-300 font-medium'
        onClick={toggleFilter}
      >
        <BsFilter />
      </button>
      {isFilterOpen && (
        <div className='absolute bg-slate-200 right-0 top-[3rem] py-2 rounded-lg transition-all duration-300 text-gray-600'>
          <div className='flex items-center justify-between mb-3 px-3'>
            <p className='font-semibold text-gray-800'>Sort by</p>
            <BsArrowLeftRight />
          </div>
          <p className='cursor-pointer my-1 text-sm font-medium hover:bg-slate-300 py-2 px-5'>
            Highest Rating
          </p>
          <p className='cursor-pointer my-1 text-sm font-medium hover:bg-slate-300 py-2 px-5'>
            Shortest distance
          </p>
        </div>
      )}
    </div>
  );
};

export default DishSearch;

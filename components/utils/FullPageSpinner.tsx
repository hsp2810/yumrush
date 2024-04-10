import { useLoader } from "@/context/LoaderContext";
import React, { useState, useEffect } from "react";

const FullPageSpinner = () => {
  const { isLoading } = useLoader();

  return (
    <>
      {isLoading && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50'>
          <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-orange-500'></div>
        </div>
      )}
    </>
  );
};

export default FullPageSpinner;

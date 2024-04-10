import React, { useContext, createContext, useState } from "react";

interface LoaderContextType {
  setLoading: (arg: boolean) => void;
  isLoading: boolean;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function useLoader(): LoaderContextType {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error(
      "useObjectArrayContext must be used within an ObjectArrayContext.Provider"
    );
  }

  return context;
}

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoading = (arg: boolean) => {
    setIsLoading(arg);
  };

  return (
    <LoaderContext.Provider value={{ setLoading, isLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

import React, { createContext, useState, ReactNode } from "react";

// Define the type for your context value
interface DrawerContextValue {
  isOpenDrawer: boolean;
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a new context
const DrawerContext = createContext<DrawerContextValue | undefined>(undefined);

// Define the props for the provider component
interface DrawerProviderProps {
  children: ReactNode;
}

// Create a Provider component that will wrap your app
const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  // Define the state and its initial value
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return <DrawerContext.Provider value={{ isOpenDrawer, setIsOpenDrawer }}>{children}</DrawerContext.Provider>;
};

export { DrawerContext, DrawerProvider };

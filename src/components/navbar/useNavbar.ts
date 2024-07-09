import { useState } from "react";

export const useNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleIsOpen,
  };
};

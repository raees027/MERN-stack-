import { useState } from "react";

export const useToggle = () => {
  const [theme, setTheme] = useState(false);

  const handleToggle = () => {
    setTheme((prev) => !prev);
  };

  return { theme, handleToggle };
};

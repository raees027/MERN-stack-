import { useState } from "react";

export const useDirection = () => {
  const [direction, setDirection] = useState(
    document.documentElement.getAttribute("dir")
  );

  const handleDirection = () => {
    const newDirection = direction === "ltr" ? "ltr" : "rtl";

    setDirection(newDirection);
  };

  return { direction, handleDirection };
};

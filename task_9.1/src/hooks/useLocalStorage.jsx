import { useEffect, useId, useState } from "react";

export const useLocalStorage = () => {
  const [items, setItems] = useState({
    id: "",
    token: "",
  });

  const handleSetItems = (event) => {
    setItems((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLocalStorage = () => {
    if (items.token) {
      localStorage.setItem(items.id, JSON.stringify(items.token));
    }
    const savedToken = JSON.parse(localStorage.getItem(items.id));
    console.log("===token", savedToken);
    setItems((prev) => ({ ...prev, id: "", token: "" }));
    console.log("saved_token", items);
  };

  return { items, handleSetItems, handleLocalStorage };
};

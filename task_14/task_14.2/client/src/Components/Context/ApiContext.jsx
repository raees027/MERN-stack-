import axios from "axios";
import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const API_URL = "http://localhost:3001/api/product-list";
  const [productList, setProductList] = useState([]);
  const fetchProductList = async () => {
    try {
      const response = await axios(API_URL);
      setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductWithID = async (id) => {
    try {
      const response = await axios(API_URL, {
        params: {
          id,
        },
      });

      setProductList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApiContext.Provider
      value={{ API_URL, fetchProductList, fetchProductWithID, productList }}
    >
      {children}
    </ApiContext.Provider>
  );
};

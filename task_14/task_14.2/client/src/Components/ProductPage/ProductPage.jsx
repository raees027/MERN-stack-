import { useContext, useEffect } from "react";
import "./ProductPage.css";
import { ApiContext } from "../Context/ApiContext";
import { useParams } from "react-router";
export const ProductPage = () => {
  const { fetchProductWithID, productList } = useContext(ApiContext);

  const { id } = useParams();

  const product = productList.filter((data) => data.id === id);
  console.log(productList);
  useEffect(() => {
    fetchProductWithID(id);
  }, [id, productList]);

  console.log(product);

  return (
    <>
      {product.map((data) => (
        <>
          <div className="product-page-container" key={data.id}>
            <div className="product-page-left-section">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="product-page-right-section">
              <h2> {data.title}</h2>
              <h5>Color: {data.color}</h5>
              <h5>Price: {data.price}</h5>
              <h5>Stock: {data.stock}</h5>
              <h5>Category: {data.category}</h5>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

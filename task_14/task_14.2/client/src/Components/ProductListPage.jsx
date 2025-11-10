import { useContext, useEffect } from "react";
import "./ProductListPage.css";
import { ApiContext } from "./Context/ApiContext";
import { useNavigate } from "react-router";

export const ProductListPage = () => {
  const { API_URL, fetchProductList, productList, fetchProductWithID } =
    useContext(ApiContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProductList();
  }, []);

  const handleProductListWithId = (id) => {
    fetchProductWithID(id);
    navigate(`/${id}`);
  };

  console.log(productList, "==productList");

  return (
    <>
      <div className="product-list-container">
        <div className="product-list-item">
          {productList.length === 0 ? (
            <p className="no-products">No Products Available</p>
          ) : (
            productList.map((data) => (
              <div
                className="item-card"
                key={data.id}
                onClick={() => {
                  handleProductListWithId(data.id);
                }}
              >
                <img src={data.image} alt={data.title || "Product"} />
                <h3>{data.title}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

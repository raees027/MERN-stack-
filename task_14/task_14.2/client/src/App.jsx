import { useState } from "react";
import "./Styles/globals.css";
import "./Styles/variables.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { ProductListPage } from "./Components/ProductListPage";
import { ProductPage } from "./Components/ProductPage/ProductPage";
import { Route, Routes } from "react-router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

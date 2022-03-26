import React from "react";
import Header from "./components/Header/Header";
import LateralMenu from "./components/LateralMenu/LateralMenu";
import ProductsCarrousel from "./components/ProductsCarroussel/ProductsCarrousel";
import ProductList from "./components/ProductArea/ProductList";

function App() {

  return (
    <React.Fragment>
      <Header/>
      <LateralMenu/>
      <ProductsCarrousel/>
      <ProductList/>
    </React.Fragment>
  );
}

export default App;




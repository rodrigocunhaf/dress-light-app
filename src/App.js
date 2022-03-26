import React from "react";
import Header from "./components/Header/Header";
import LateralMenu from "./components/LateralMenu/LateralMenu";
import ProductsCarrousel from "./components/ProductsCarroussel/ProductsCarrousel";
import ProductList from "./components/ProductArea/ProductList";
import AuthProvider from "./store/AuthContext";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <AuthProvider>
      <Header/>
      <LateralMenu/>
      <ProductsCarrousel/>
      <ProductList/>
      <Footer/>
    </AuthProvider>
  );
}

export default App;




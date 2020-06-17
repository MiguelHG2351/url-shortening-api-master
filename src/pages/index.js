import React from "react";

// Component
import Description from "../components/description";
import Header from "../components/header";
import Footer from "../components/footer";
import Product from "../components/product";
import Shorten from "../components/shorten";

function Index() {
  return (
    <Header>
      <Description />
      <Shorten />
      <Product />
      <Footer />
    </Header>
  );
}

export default Index;
import { useState, useEffect } from "react";
import "./App.css";
import CartContextProvider from "./componentos/CartContext";
import Header from "./componentos/Header";
import Loading from "./componentos/Loading";
import Products from "./componentos/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [firstProducts, setFirstProducts] = useState([]);
  const [preLoading, setPreLoading] = useState(false);
  const [productsFilterPrice, setProductsFilterPrice] = useState([]);

  const onChoose = (c) => {
    console.log(c.target.value);
    if (c.target.value === "All Products") {
      setProducts(firstProducts);
      setProductsFilterPrice(firstProducts);
    } else {
      setProducts(
        firstProducts.filter((choose) => choose.category === c.target.value)
      );
      setProductsFilterPrice(
        firstProducts.filter((choose) => choose.category === c.target.value)
      );
    }
  };

  const onHandleChange = (event, newValue) => {
    console.log(newValue);
    setProducts(
      productsFilterPrice.filter(
        (choose) => choose.price >= newValue[0] && choose.price <= newValue[1]
      )
    );
  };

  useEffect(() => {
    setPreLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFirstProducts(json);
        setProductsFilterPrice(json);
        setPreLoading(false);
      });
  }, []);
  const values = productsFilterPrice
    .map((p) => p.price)
    .filter((value) => value > 0);

  const categories = [
    "All Products",
    ...firstProducts
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];

  return (
    <CartContextProvider>
      <div>
        <Header
          onChoose={onChoose}
          categories={categories}
          value={values}
          handleChange={onHandleChange}
        />
        <br />
        {preLoading && <Loading />}
        <br />
        <Products products={products} />
      </div>
    </CartContextProvider>
  );
}

export default App;

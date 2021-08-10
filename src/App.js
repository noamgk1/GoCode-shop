import { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentos/Header";
import Products from "./componentos/Products";

function App() {
  let products = [];

  const [choose, setChoose] = useState([]);
  /*const [category, setCategory] = useState([categories]);*/

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setChoose(json);
        /*setCategory(json);*/
      });
  }, []);

  const onChoose = (c) => {
    if (c.target.value === "All Products") {
      setChoose(products);
    } else {
      setChoose(
        products.filter((choose) => choose.category === c.target.value)
      );
    }
  };

  /*const categories = [
    "All Products",
    products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
    ,
  ];*/

  return (
    <div>
      <Header
        onChoose={onChoose}
        categories={choose
          .map((p) => p.category)
          .filter((value, index, array) => array.indexOf(value) === index)}
      />
      <br />
      <Products products={choose} />
    </div>
  );
}

export default App;

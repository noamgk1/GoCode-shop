import { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentos/Header";
import Products from "./componentos/Products";

function App() {
  const [choose, setChoose] = useState([]);
  const [category, setCategory] = useState([]);

  const onChoose = (c) => {
    console.log(c.target.value);
    if (c.target.value === "All Products") {
      setChoose(category);
    } else {
      setChoose(
        category.filter((choose) => choose.category === c.target.value)
      );
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setChoose(json);
        setCategory(json);
      });
  }, []);

  const categories = category
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  categories.push("All Products");

  return (
    <div>
      <Header onChoose={onChoose} categories={categories} />
      <br />
      <Products products={choose} />
    </div>
  );
}

export default App;

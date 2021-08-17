import "./Products.css";
import Product from "../Product/Product";

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((products) => (
        <Product
          p={products}
          key={products.id}
          id={products.id}
          title={products.title}
          price={products.price}
          description={products.description}
          category={products.category}
          image={products.image}
        />
      ))}
    </section>
  );
};

export default Products;

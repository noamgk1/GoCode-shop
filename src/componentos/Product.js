import "./Product.css";

const Product = ({ image, title, price, category, description }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt=" " />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        <h4>{category}</h4>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default Product;

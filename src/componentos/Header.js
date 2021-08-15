import FilterByPrice from "./FilterByPrice";
import SideCart from "./SideCart";
import "./Header.css";

const Header = ({ categories, onChoose, value, handleChange }) => {
  let index = 1;

  return (
    <>
      <nav className="product-filter">
        <h1>My Shop</h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={onChoose}>
              {categories.map((p) => (
                <option key={index++} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>
          <div className="collection-sort">
            <SideCart />
          </div>
        </div>
      </nav>

      <div align="right" dir="rtl">
        <FilterByPrice value={value} handleChange={handleChange} />{" "}
      </div>
    </>
  );
};

export default Header;

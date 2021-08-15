import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cartList, setCartList] = useState([]);

  const onAdd = (product) => {
    let exist = cartList.findIndex((x) => x.id === product.id);
    if (exist > -1) {
      setCartList(
        cartList.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      );
    } else
      setCartList([
        ...cartList,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          qty: 1,
        },
      ]);
  };

  const onRemove = (product) => {
    let exist = cartList.findIndex((x) => x.id === product.id);
    if (cartList[exist].qty === 1) {
      setCartList(cartList.filter((x) => x.id !== product.id));
    } else {
      setCartList(
        cartList.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        )
      );
    }
  };
  const value = { cartList, onAdd, onRemove };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export default CartContextProvider;

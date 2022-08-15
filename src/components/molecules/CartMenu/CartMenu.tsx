import "./CartMenu.css";
import { ForwardedRef, forwardRef } from "react";

export interface CartMenuData {
    price: string
    viewCart: string
    checkout: string;
}

export interface CartMenuProps {
    cartMenu: CartMenuData
}

const CartMenu = forwardRef((props:CartMenuProps,ref: ForwardedRef<HTMLDivElement>) => {
  const cart = props;

  return (
    <div className="openCart" ref={ref}>
      <div>{cart.cartMenu.price}</div>
      <div>{cart.cartMenu.viewCart}</div>
      <div>{cart.cartMenu.checkout}</div>
    </div>
  );
});
export default CartMenu
import "./CartMenu.css";

export interface CartMenuData {
  price: string;
  viewCart: string;
  checkout: string;
}

export interface CartMenuProps {
  cartMenu: CartMenuData;
}

const CartMenu = (props: CartMenuProps) => {
  const cart = props;

  return (
    <div className="openCart">
      <div>{cart.cartMenu.price}</div>
      <div>{cart.cartMenu.viewCart}</div>
      <div>{cart.cartMenu.checkout}</div>
    </div>
  );
};
export default CartMenu;

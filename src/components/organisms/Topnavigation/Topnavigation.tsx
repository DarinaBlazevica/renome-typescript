import "./Topnavigation.css";
import "../../atoms/buttons/Hamburger";
import Hamburger from "../../atoms/buttons/Hamburger";
import { useEffect, useRef, useState } from "react";
import CartMenu, { CartMenuData } from "../../molecules/CartMenu/CartMenu";
import Menu, { MenuData } from "../../molecules/Menu/Menu";

export interface TopnavigationProps {
  title: string;
  cart: string;
  cart_content: string;
  divider: string;
  cartMenu: CartMenuData;
  menu: MenuData[];
}

const TopNavigation = (props: TopnavigationProps) => {
  const topnavigationProps = props;

  const [isCartMenuOpen, setIsCartMenuOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hamburgerStyle, setHamburgerStyle] = useState<string>("bar");
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (
        !isCartMenuOpen &&
        cartRef.current &&
        !cartRef.current.contains(e.target as HTMLInputElement)
      ) {
        console.log("outsideClick active");
        setIsCartMenuOpen(false);
      }

      // if (
      //   menuRef.current &&
      //   !menuRef.current.contains(e.target as Node) &&
      //   isMenuOpen === true
      // ) {
      //   setIsMenuOpen(false);
      //   setHamburgerStyle("bar");
      // }
      // if (
      //   subMenuRef.current &&
      //   !subMenuRef.current.contains(e.target as HTMLElement) &&
      //   isSubMenuOpen === true
      // ) {
      //   setIsSubMenuOpen(false);
      //   setHamburgerStyle("bar");
      // }
    };

    document.body.addEventListener("click", handler);

    return () => {
      document.body.removeEventListener("click", handler);
    };
  }, [cartRef]);

  const toggleMenu = () => {
    setHamburgerStyle(hamburgerStyle === "bar" ? "change" : "bar");
    setIsMenuOpen(
      isMenuOpen === false && isSubMenuOpen === false ? true : false
    );
    setIsCartMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
    setIsMenuOpen(false);
    setHamburgerStyle("bar");
  };

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
    setIsMenuOpen(false);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    setIsMenuOpen(true);
  };

  return (
    <nav className="top-nav">
      <div className="top-nav__header-block">
        <div className="renome">{topnavigationProps.title}</div>
      </div>
      <div className="top-nav__cart-block">
        {isCartMenuOpen && (
          <CartMenu cartMenu={topnavigationProps.cartMenu} ref={cartRef} />
        )}
        <img
          className="top-nav__shopping-cart"
          src={topnavigationProps.cart}
          alt="shopping-cart"
          onClick={() => toggleCart()}
        />

        <div className="top-nav__cart-count">
          {topnavigationProps.cart_content}
        </div>
        <div className="top-nav__divider">{topnavigationProps.divider}</div>
        <Hamburger
          toggleMenu={() => toggleMenu()}
          hamburgerStyle={hamburgerStyle}
        />
      </div>
      {isMenuOpen && (
        <Menu
          menu={topnavigationProps.menu}
          openSubMenu={() => openSubMenu()}
          ref={menuRef}
        />
      )}
      {/* {isSubMenuOpen && (
          <SubNavigation
            ref={subMenuRef}
            subnav={NavigationMenu}
            backBtnMenu={() => closeSubMenu()}
          />
        )}
  
        {isMenuOpen || isSubMenuOpen
          ? document.body.classList.add("disable__scroll")
          : document.body.classList.remove("disable__scroll")} */}
    </nav>
  );
};
export default TopNavigation;

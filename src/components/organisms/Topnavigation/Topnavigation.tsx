import "./Topnavigation.css";
import "../../atoms/buttons/Hamburger";
import Hamburger, { HamburgerStyle } from "../../atoms/buttons/Hamburger";
import { useEffect, useRef, useState } from "react";
import CartMenu, { CartMenuData } from "../../molecules/CartMenu/CartMenu";
import Menu, { MenuData, SubMenuData } from "../../molecules/Menu/Menu";
import Subnavigation from "../../molecules/Subnavigation/Subnavigation";

export interface TopnavigationProps {
  title: string;
  cart: string;
  cart_content: string;
  divider: string;
  cartMenu: CartMenuData;
  menu: MenuData[];
  subMenu: SubMenuData[]
}

const TopNavigation = (props: TopnavigationProps) => {
  const topnavigationProps = props;

  const [isCartMenuOpen, setIsCartMenuOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hamburgerStyle, setHamburgerStyle] = useState<HamburgerStyle>(
    HamburgerStyle.close
  );
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (!Ref.current?.contains(e.target as HTMLElement)) {
        setIsCartMenuOpen(false);
        setIsSubMenuOpen(false);
        setIsMenuOpen(false);
        setHamburgerStyle(HamburgerStyle.close);
      }
    };

    {
      isMenuOpen || isSubMenuOpen
        ? document.body.classList.add("disable__scroll")
        : document.body.classList.remove("disable__scroll");
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [Ref, isMenuOpen, isSubMenuOpen]);

  const toggleMenu = () => {
    setHamburgerStyle(
      hamburgerStyle === HamburgerStyle.close
        ? HamburgerStyle.open
        : HamburgerStyle.close
    );
    setIsMenuOpen(
      isMenuOpen === false && isSubMenuOpen === false ? true : false
    );
    setIsCartMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartMenuOpen(!isCartMenuOpen);
    setIsMenuOpen(false);
    setHamburgerStyle(HamburgerStyle.close);
    setIsSubMenuOpen(false);
  };

  const openSubMenu = () => {
    setHamburgerStyle(HamburgerStyle.open);
    setIsSubMenuOpen(!isSubMenuOpen);
    setIsMenuOpen(false);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    setIsMenuOpen(true);
    setHamburgerStyle(HamburgerStyle.open);
  };

  return (
    <nav className="top-nav" ref={Ref}>
      <div className="top-nav__header-block">
        <div className="renome">{topnavigationProps.title}</div>
      </div>
      <div className="top-nav__cart-block">
        {isCartMenuOpen && <CartMenu cartMenu={topnavigationProps.cartMenu} />}
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
        />
      )}
      {isSubMenuOpen && (
        <Subnavigation
          subMenu={topnavigationProps.menu}
          backBtnMenu={() => closeSubMenu()}
          title="Back"
        />
      )}
    </nav>
  );
};
export default TopNavigation;

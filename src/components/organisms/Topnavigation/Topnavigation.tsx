import "./Topnavigation.css";
import "../../atoms/buttons/Hamburger";
import Hamburger , {HamburgerStyle} from "../../atoms/buttons/Hamburger";
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
  const [hamburgerStyle, setHamburgerStyle] = useState<HamburgerStyle>(HamburgerStyle.close);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (!Ref.current?.contains(e.target as HTMLElement)) {
        setIsCartMenuOpen(false);
      }

      if (!Ref.current?.contains(e.target as HTMLElement)) {
        setIsMenuOpen(false);
        setHamburgerStyle(HamburgerStyle.close);
      }
      // if (
      //   subMenuRef.current &&
      //   !subMenuRef.current.contains(e.target as HTMLElement) &&
      //   isSubMenuOpen === true
      // ) {
      //   setIsSubMenuOpen(false);
      //   setHamburgerStyle("bar");
      // }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [Ref]);

  const toggleMenu = () => {
    setHamburgerStyle(hamburgerStyle === HamburgerStyle.close ? HamburgerStyle.open : HamburgerStyle.close);
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
      <div className="top-nav__cart-block" ref={Ref}>
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

import React, { ForwardedRef, forwardRef } from "react";
import "./Menu.css";

export interface MenuData {
  title: string;
  url: string;
  path: string;
}

export interface MenuProps {
  openSubMenu?: ()=> void
  menu: MenuData[]
}

const Menu = forwardRef((props: MenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    const menuProps = props;

  const setMenuContent = (item: MenuData, i: number) => {
    if (item.title === "Search") {
      return (
        <div className="search__section" key={i}>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            title="Type in a category"
          />
          <img className="search-icon" src={item.path} alt="search-bar" />
        </div>
      );
    } else if (item.title === "Features") {
      return (
        <a
          className="menu__feature"
          href={item.url}
          key={i}
          onClick={menuProps.openSubMenu}
        >
          {item.title}
          <button type="button" className="menu-feature__btn">
            <img src={item.path} alt="features-button" />
          </button>
        </a>
      );
    } else {
      return (
        <a href={item.url} key={i}>
          {item.title}
        </a>
      );
    }
  };
  return (
    <div className="menu" ref= {ref}>
      {menuProps.menu.map((item, i) => {
        return setMenuContent(item, i);
      })}
    </div>
  );
});
export default Menu;
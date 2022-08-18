import "./Menu.css";

export interface SubMenuData {
  title: string;
  url: string;
}

export interface MenuData {
  title: string;
  url: string;
  path?: string;
  isSubMenu?: boolean;
  subMenu?: SubMenuData[];
}

export interface MenuProps {
  openSubMenu: () => void;
  menu: MenuData[];
}

const Menu = (props: MenuProps) => {
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
    <div className="menu">
      {menuProps.menu.map((item, i) => {
        return setMenuContent(item, i);
      })}
    </div>
  );
};
export default Menu;

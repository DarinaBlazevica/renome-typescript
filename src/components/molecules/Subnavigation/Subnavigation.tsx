import Arrow from "../../../assets/svg/angle-left-solid-black.svg"
import { MenuData } from "../Menu/Menu";
import "./Subnavigation.css";



interface SubnavigationProp {
    subMenu: MenuData[]
    backBtnMenu: () => void
    path?: string;
    title: string;
}

const Subnavigation = (props: SubnavigationProp) => {
    const subnavigationProps = props

    const reduceItem = subnavigationProps.subMenu.reduce<any>((subMenu, item) => {
      if (item.isSubMenu) return { ...subMenu, item };
      return subMenu;
    }, []);
  
    return (
      <div className="sub-menu">
        <div className="top-nav__sub-navigation__back" onClick={subnavigationProps.backBtnMenu}>
          <button type="button" className="top-nav__sub-navigation__backbtn">
            <img src={Arrow} alt="back_button" />
          </button>
          {subnavigationProps.title}
        </div>
        {reduceItem.item.subMenu.map((subMenuItem: MenuData, i: number) => {
          return <div key={i}>{subMenuItem.title}</div>;
        })}
      </div>
    );
  }
export default Subnavigation
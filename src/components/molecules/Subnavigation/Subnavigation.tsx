import Arrow from "../../../assets/svg/angle-left-solid-black.svg";
import { MenuData, SubMenuData } from "../Menu/Menu";
import "./Subnavigation.css";

interface SubnavigationProp {
  subMenu: MenuData[];
  backBtnMenu: () => void;
  path?: string;
  title: string;
}

const Subnavigation = (props: SubnavigationProp) => {
  const subnavigationProps = props;
  const subMenuItems = subnavigationProps.subMenu.reduce((subMenu, item) => {
    if (item.isSubMenu && item.subMenu) return [...item.subMenu];
    return subMenu;
  }, [] as SubMenuData[]);

  return (
    <div className="sub-menu">
      <div
        className="top-nav__sub-navigation__back"
        onClick={subnavigationProps.backBtnMenu}
      >
        <button type="button" className="top-nav__sub-navigation__backbtn">
          <img src={Arrow} alt="back_button" />
        </button>
        {subnavigationProps.title}
      </div>
      {subMenuItems.map((subMenuItem: SubMenuData, i: number) => {
        return <div key={i}>{subMenuItem.title}</div>;
      })}
    </div>
  );
};
export default Subnavigation;

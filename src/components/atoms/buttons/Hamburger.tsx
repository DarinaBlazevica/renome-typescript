import "./Hamburger.css";

interface HamburgerProps {
    hamburgerStyle: HamburgerStyle
    toggleMenu: () => void
}

export enum HamburgerStyle {
    close = "bar",
    open = "change"
  }


const Hamburger = (props: HamburgerProps) => { 
    const hamburger = props;

return(
    <div className="top-nav__hamburger" onClick={hamburger.toggleMenu}>
        <div className={hamburger.hamburgerStyle}></div>
        <div className={hamburger.hamburgerStyle}></div>
        <div className={hamburger.hamburgerStyle}></div>
    </div>
    )
}
export default Hamburger;
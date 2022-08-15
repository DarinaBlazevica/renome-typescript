import "./Hamburger.css";

interface Hamburger {
    hamburgerStyle: string
    toggleMenu: () => void
}

const Hamburger = (props: Hamburger) => { 
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
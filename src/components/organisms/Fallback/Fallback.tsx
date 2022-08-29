import "./Fallback.css"
import Connect from "../../../assets/svg/link-slash-solid.svg"

const Fallback = () => {
    return(
        <div className="fallback">
            <img src={Connect} alt="connect" />
            <h1 className="title">Something went wrong</h1>
            <p className="content">Please try to reload page</p>
        </div>
    )
}
export default Fallback;
import "./Fallback.css"
import Connect from "../../../assets/svg/link-slash-solid.svg"

interface FallbackProps {
    title: string
    content: string;
}

const Fallback = (props: FallbackProps) => {
    const fallbackProps = props;

    return(
        <div className="fallback">
            <img src={Connect} alt="connect" />
            <h1 className="title">{fallbackProps.title}</h1>
            <p className="content">{fallbackProps.content}</p>
        </div>
    )
}
export default Fallback;
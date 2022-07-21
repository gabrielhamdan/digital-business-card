import "./Button.css"

export default function Button(props) {
    return (
        <a href={props.url} target="_blank">
            <div className="btn" style={{color: props.color, backgroundColor: props.backgroundColor}}><i className={props.icon}></i>{props.label}</div>
        </a>
    )
}

Button.defaultProps = {
    label: "Click me!",
    icon: "",
    url: "#",
    color: "black",
    backgroundColor: "white"
}
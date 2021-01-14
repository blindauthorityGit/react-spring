import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring/renderprops";

function Box(props) {
    return (
        <div className="wrapper">
            <div className="box">
                <h2>{props.title}</h2>
                <img src={props.source} onClick={props.onClick} alt=""/>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Box;

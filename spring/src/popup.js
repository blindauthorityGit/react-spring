import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring/renderprops";

function Popup(props) {
    return (
        <div className="wrapper">
            <div className="popup" id="popup">
                <h2>{props.title}</h2>
                <input id="newImage" type="text"/>
                <button onClick={props.onClick}></button>
            </div>
        </div>
    );
}

export default Popup;

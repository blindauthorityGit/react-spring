import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring/renderprops";

function Popup(props) {
    return (
        <div className="wrapper popupWrapper">
            <div className="popup" id="popup">
                <h2 id="popupTitle">{props.title}</h2>
                <img src={props.url} id="newImage"/>
                <button onClick={props.onClick}></button>
            </div>
        </div>
    );
}

export default Popup;

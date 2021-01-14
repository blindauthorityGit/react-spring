import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring/renderprops";

function Test(props) {
    return (
        <div className="wrapper">
            <h1>{props.content}</h1>
        </div>
    );
}

export default Test;

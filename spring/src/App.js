import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring/renderprops";
import Test from "./test.js";
import Box from "./box.js";
import Popup from "./popup.js";

function App() {
    const [content, setContent] = useState("BUBU");
    const [title, setTitle] = useState(["Title 1", "Title 2", "Title 3"]);
    const [img, setImg] = useState("https://via.placeholder.com/150");

    let text;
    let color;
   
       if (content == "Hallo") {
        text = content;
    } else {
        text = "Kein State";
    }

    function changeTitle() {
        console.log("test")
        setTitle(["Neuer Titel", "Title 2", "Title 3"])
    }

    function changeState() {   
      setContent(document.getElementById("changer").value)
    }
    function handleClick() {   
      alert("test")
      Array.from(document.getElementsByClassName("box")).forEach(e => {
        e.children[1].src = document.querySelector("#newImage").value
      })
    }

    return (
        <Spring
            from={{ opacity: 0, marginTop: -1000, background: "red" }}
            to={{ opacity: 1, marginTop: 0, background: "blue" }}
        >
            {(props) => (
                <div className="App" style={props}>
                    <div>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Test content={text} />
                            <div className="boxWrapper">
                              <Box title={title[0]} source={img} onClick={() => setTitle(["Neuer Titel", "Title 2", "Title 3"])}></Box>
                              <Box title={title[1]} source={img}></Box>
                              <Box title={title[2]} source={img}></Box>
                            </div>
                            <Popup onClick={handleClick}></Popup>
                            <p>
                               The color is {color}
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                            <input id="changer" type="text"/>
                            <button id="submit" onClick={changeState}>Submit</button>
                            
                        </header>
                    </div>
                </div>
            )}
        </Spring>
    );
}

export default App;

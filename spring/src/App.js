import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring/renderprops";
import Test from "./test.js";
import Box from "./box.js";
import Popup from "./popup.js";
import {heat} from "./array.js";
import {dawn} from "./array.js";
import {garden} from "./array.js";
import {magnificent} from "./array.js";
import {rainyspring} from "./array.js";
import {layers} from "./array.js";

function App() {

    useEffect(() => { 
        setImgs(categories[count])
    });

    const categories = [heat, dawn, garden, magnificent, rainyspring, layers];

    const [content, setContent] = useState("BUBU");
    const [title, setTitle] = useState(["Title 1", "Title 2", "Title 3"]);
    const [img, setImg] = useState("https://via.placeholder.com/150");

    const [count, setCount] = useState(0);
    const [imgs, setImgs] = useState(categories[count]);

    const onFirstPage = count == 0;
    const onLastPage = count == categories.length - 1;

    let text;
    let color;
   
    if (content == "Hallo") {
        text = content;
    } else {
        text = "Kein State";
    }

    function weiter() {
        setCount(prevCount => prevCount + 1);
        // setImgs(categories[count])
    }
    function zurueck() {
        setImgs(categories[count])

        console.log(count, imgs);
        if(count !== 0){
            console.log("net 0")
        setCount(prevCount => prevCount - 1);
        console.log(count)
        } else {
            setCount(prevCount => prevCount - 1);
        }
        setImgs(categories[count])
    }

    function changeTitle() {
        console.log("test")
        setTitle(["Neuer Titel", "Title 2", "Title 3"])
    }

    function test(e) {
        console.log(e.target)
      
    }

    function disappear(element, index) {
        console.log(element.target, index);
        console.log(imgs.filter(e => e !== imgs[index]))
        setImgs(imgs.filter(e => e !== imgs[index])) 
        // imgs.map(f => console.log(f));
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

    const btnStyle = {
        "width": "300px",
        "height": "200px"
    }

    return (
        <Spring
            from={{ opacity: 0, marginTop: -1000, background: "red" }}
            to={{ opacity: 1, marginTop: 0, background: "lightgrey" }}
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
                        
                            <h1>{count}</h1>
                            <div className="imgsWrapper">
                            {imgs.map((e,i) => (
                                <div>
                                    {/* <h2>{e.kategorie}</h2>
                                    <p>{e.stil}</p> */}
                                    <img src={e.link} width="250px" key={i} alt={i} onClick={() => disappear(e, i)} />
                                </div>
                            ))}
                           
                            </div>
                            <button onClick={zurueck} disabled={onFirstPage}>zurueck</button>
                            <button onClick={weiter} disabled={onLastPage}>Weiter</button>
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

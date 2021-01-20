import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring/renderprops";
import {Container} from "react-bootstrap";
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



    const categories = [heat, dawn, garden, magnificent, rainyspring, layers];

    const [content, setContent] = useState("BUBU");
    const [title, setTitle] = useState(["Title 1", "Title 2", "Title 3"]);
    const [img, setImg] = useState("https://via.placeholder.com/150");

    const [count, setCount] = useState(0);
    const [imgs, setImgs] = useState(categories[count]);
    

    const onFirstPage = count == 0;
    const onLastPage = count == categories.length - 1;

    useEffect(() => { 
        setImgs(categories[count])
    }, [count]);

    const popup = useRef(null);


    let text;
    let color;
   
    if (content == "Hallo") {
        text = content;
    } else {
        text = "Kein State";
    }

    function weiter() {
        document.querySelector(".imgsWrapper").classList.remove("slide-in-left");
        document.querySelector(".imgsWrapper").classList.remove("slide-in-right");
        document.querySelector(".imgsWrapper").classList.add("slide-out-left")
        setTimeout(() => {
             setCount(prevCount => prevCount + 1); 
             document.querySelector(".imgsWrapper").classList.remove("slide-out-left");
             document.querySelector(".imgsWrapper").classList.add("slide-in-right");
        }, 500);
      
        // setImgs(categories[count])
    }
    function zurueck() {
        document.querySelector(".imgsWrapper").classList.remove("slide-in-right");
        document.querySelector(".imgsWrapper").classList.add("slide-out-right")
        setTimeout(() => {
             setCount(prevCount => prevCount - 1); 
             document.querySelector(".imgsWrapper").classList.remove("slide-out-right");
             document.querySelector(".imgsWrapper").classList.add("slide-in-left");
        }, 500);
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

    function popupMaker(element, index, name, src) {
        console.log("test", index)
        console.log(popup.current)
        document.querySelector("#popupTitle").innerHTML = name;
        document.querySelector("#newImage").src = src;
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

                            <Popup title={"Test"}></Popup>
                   
                        
                            <h1>{count}</h1>
                            <Container>
                            <div className="imgsWrapper">
                            {imgs.map((e,i) => (
                                <div>
                                    {/* <h2>{e.kategorie}</h2>
                                    <p>{e.stil}</p> */}
                                   { console.log(e)}
                                    <img src={e.link} width="200px" key={i} alt={i} onClick={() => popupMaker(e, i, e.name, e.url)} />
                                </div>
                            ))}
                           
                            </div>
                            </Container>
                            {categories.map((e,i) => (
                                <div className="pagination">{i}</div>
                            ))}

                            <button ref={popup} onClick={zurueck} disabled={onFirstPage}>zurueck</button>
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

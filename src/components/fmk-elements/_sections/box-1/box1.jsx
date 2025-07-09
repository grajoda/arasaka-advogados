import "./box1.css"

import boxText from "./box1.json"

export default function Box1() {
    return(
        <div className="box-1" id="about-us">
            <h1>{boxText.title}</h1>
            <p>{boxText.text}</p>
        </div>
    )
}
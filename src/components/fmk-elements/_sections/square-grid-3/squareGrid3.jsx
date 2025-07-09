import { useEffect, useState } from "react"
import "./squareGrid3.css"

import squareGridItems from "./squareGridItems.json"

export default function SquareGrid3(){

    const content = squareGridItems

    return(
        <div className="square-grid-3" id="services">
            <h1>{content.sectionName}</h1>
            <ItemsList items={content.items}/>
        </div>
    )
}


function ItemsList({items}) {
    return(
        <div className="square-grid-3-list">
            {items.map(item => <ListItem item={item}/>)}
        </div>
    )
}


function ListItem({item}) {

    const [hovered, setHovered] = useState(false);

    function handleSHowText() {
        setHovered(true)
    }

    function handleHideText() {
        setHovered(false)
    }


    return(
        <div className="square-grid-3-item" onMouseOver={handleSHowText} onMouseOut={handleHideText}>
            <ItemImageSection item={item}/>
            <ItemTextContent title={item.name} text={item.text} isHovered={hovered}/>
        </div>
    )
}


function ItemImageSection({item}) {
    return(
        <div className="square-grid-3-item-image-section">
            <img src={item.imgPath}/>
        </div>
    )
}


function ItemTextContent({title, text, isHovered}) {

    const [textColor, setTextColor] = useState("rgba(240, 248, 255, 0)");
    const [backgroundColorHook, setBackgroundColor] = useState("rgba(0, 0, 0, 0)");

    function handleShowItems() {
        setTextColor("rgba(240, 248, 255, 1)")
        setBackgroundColor("rgba(0, 0, 0, 0.488)")
    }

    function handleHideItems() {
        setTextColor("rgba(240, 248, 255, 0)")
        setBackgroundColor("rgba(0, 0, 0, 0)")
    }

    useEffect(() => {
        if (isHovered) {
            handleShowItems()
        } else {
            handleHideItems()
        }
    }, [isHovered])

    const style = {
        backgroundColor: backgroundColorHook,
        color: textColor
    }

    return(
        <div className="square-grid-3-item-text-content" style={style}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
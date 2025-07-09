import "./textList2.css"

import listItems from "./listItems.json"
import { useEffect, useState } from "react";

export default function TextList2 () {

    const items = listItems.items;

    return(
        <div className="text-list-2" id="questions">
            <h1>Perguntas Frequentes</h1>

            <div className="text-list-2-item-list">
                {items.map(item => <ListItem item={item}/>)}
            </div>

        </div>
    )
}


function ListItem({item}) {

    

    const [headerTextAlign, setHeaderTextAlign] = useState()
    const [headerJustifySelf, setHeaderJustifySelf] = useState()

    const itemStyle = {
        textAlign: headerTextAlign,
        justifySelf: headerJustifySelf
    }

    useEffect(() => {
        console.log(parseInt(item.id))
        const parsedId = parseInt(item.id);
        if (parsedId % 2 != 0) {
            setHeaderTextAlign("left")
            setHeaderJustifySelf("left")
        } else {
            setHeaderTextAlign("right")
            setHeaderJustifySelf("right")
        }
    }, [])

    return(
        <div className="text-list-2-item">
            <h2 style={itemStyle}>{item.name}</h2>
            <p style={itemStyle}>{item.text}</p>
        </div>
    )
}
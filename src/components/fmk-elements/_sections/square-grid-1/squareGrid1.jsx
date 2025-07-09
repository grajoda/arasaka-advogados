import "./squareGrid1.css"

import squareGridItems from "./squareGridItems.json"

export default function SquareGrid1(){

    const content = squareGridItems

    return(
        <div className="square-grid-1">
            <h1>{content.sectionName}</h1>
            <div className="square-grid-1-list">
                {content.items.map(item => <ListItem item={item}/>)}
            </div>
        </div>
    )
}


function ListItem({item}) {
    return(
        <div className="square-grid-1-item">
            <img src={item.imgPath}/>
            <h2>{item.name}</h2>
        </div>
    )
}
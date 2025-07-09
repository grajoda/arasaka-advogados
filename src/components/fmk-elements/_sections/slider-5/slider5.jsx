import { useEffect, useState } from "react"
import "./slider5.css"

import sliderItems from "./sliderItems.json"

export default function Slider5() {

    const items = sliderItems.items;
// console.log(items)
    const [currentItem, setCurrentItem] = useState()

    useEffect(() => {
        // console.log(currentItem)
        if (!currentItem) {
            const defaultImage = items[0]
            setCurrentItem(defaultImage)
        }
    }, [])

    return(
        <div className="slider-5">
            {/* <h2>Slider</h2> */}
            
            <div className="slider-5-slide-section">
                <SlideItem item={currentItem}/>
                <ImageControls currentItem={currentItem} items={items} setImage={setCurrentItem}/>
            </div>
        </div>
    )
}


function SlideItem({item}) {
    return(
        <div className="slider-5-item">
            <img src={item ? item.imgPath : "/images/nopic.jpg"}/>
            <h2>{item ? item.name : ""}</h2>
            <p>{item ? item.text : ""}</p>
        </div>
    )
}


function ImageControls({currentItem, items, setImage}) {

    function setNextImage() {
        const indexItem = items.indexOf(currentItem)
        const nextItemIndex = indexItem + 1

        if (nextItemIndex >= items.length) {
            setImage(items[0])
        } else {
            const nextImage = items[nextItemIndex]
            setImage(nextImage)
        }
    }

    function setPreviousImage() {
        const indexItem = items.indexOf(currentItem)
        const previousItemIndex = indexItem - 1

        if (previousItemIndex == -1 ) {
            setImage(items[items.length - 1])
        } else {
            const previousImage = items[previousItemIndex]
            setImage(previousImage)
        }
    }


    return(
        <div className="slider-5-controlls">

            <div className="slider-5-swap" onClick={setPreviousImage}>
                <i class="fa-solid fa-angle-left"></i>
            </div>

            <DotedNavigation currentItem={currentItem} items={items}/>

            <div className="slider-5-swap" onClick={setNextImage}>
                <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}


function DotedNavigation({currentItem, items}) {
    return(
        <div className="slider-5-navigation">
            {items ? items.map(item => <NavigationDot currentItem={currentItem} item={item}/>) : ""}
        </div>
    )
}

function NavigationDot({currentItem, item}) {

    const selectedStyle = {
        color: "white"
    }

    const unselectedStyle = {
        color: "rgb(205, 205, 205)"
    }

    const [style, setStyle] = useState(unselectedStyle)

    // console.log(item)

    useEffect(() => {
        if(item == currentItem) {
            setStyle(selectedStyle)
        } else {
            setStyle(unselectedStyle)
        }
    }, [currentItem])

    return(
        <div style={style}>
            <p>.</p>
        </div>
    )
}
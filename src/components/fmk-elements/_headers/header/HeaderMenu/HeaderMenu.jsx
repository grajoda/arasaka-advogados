import { useEffect, useState } from "react"

import "./headerMenu.css"
import { embeddedOptionsDisplay, useEmbededOptions } from "../headerHooks"

export default function HeaderMenu({menuOptions}) {
    return(
        <div className="header-menu">
            { menuOptions ? menuOptions.map(option => <MenuOption option={option}/>) : "" }
        </div>
    )
}

function MenuOption({option}) {

    const {
        displayEmbeddedOptions,
        handleShowEmbeddedMenu,
        handleHideEmbeddedMenu
    } = embeddedOptionsDisplay()

    const embededOptions = useEmbededOptions(option)

    return(
        <div className="menu-option" onMouseOver={handleShowEmbeddedMenu} onMouseOut={handleHideEmbeddedMenu}>
            <p><a href={option.reference}>{option.name}</a></p>
            {(displayEmbeddedOptions && embededOptions) ? 
               embededOptions.map(embededOption => <EmbededOption option={embededOption}/>) : ""}
        </div>
    )
}

function EmbededOption({option}) {
    return(
        <div className="embeded-option-menu">
            <a>{option.name}</a>
        </div>
    )
}
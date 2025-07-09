import "./header.css"

import { useState, useEffect } from "react"
import HeaderContact from "./HeaderContact/HeaderContact"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import HeaderLogo from "./HeaderLogo/HeaderLogo"
import { effectHeaderScroll } from "./headerHooks"
import headerConfig from "./_headerConfig.json"
import SearchBar from "./searchBar/SearchBar"

/*
    Ideias de Como usar isso em Produção:
    - Passar os parametros para escolher o que vai aparecer na tela
    - Escolher o tipo de contato

    logo, search e contact são booleanos (true or false)
    ContactTypes{
        - social-network
        - button
        - mailAndPhone
        - both
    }


*/


export default function Header({logo, search, contact, contactType}) {

    const headerDetais = headerConfig.header
    const headerStyle = effectHeaderScroll()

    return(
        <div className="header" style={headerStyle}>
            {logo ? <HeaderLogo/> : ""}
            <HeaderMenu menuOptions={headerDetais.menuOptions}/>
            {search ? <SearchBar/> : null}
            {contact ? <HeaderContact type={contactType}/> : null}

        </div>
    )
}
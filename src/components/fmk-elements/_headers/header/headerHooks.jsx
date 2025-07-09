import { useEffect, useState } from "react"

const scrolledStyle = {
    backgroundColor: 'rgb(241, 241, 241)'
}

const unScrolledStyle = {
    backgroundColor: 'transparent'
}

/*------------------------
    Header Main
------------------------*/
/*
    Efeito de Mudança de background no scroll
*/
export function effectHeaderScroll () {
    const [headerStyle, setHeaderStyle] = useState(unScrolledStyle)
    
    function handleScroll(){
        if(window.scrollY > 0) {
            setHeaderStyle(scrolledStyle)
        } else {
            setHeaderStyle(unScrolledStyle)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return headerStyle;
}



/*------------------------
    HEADER MENU
------------------------*/
/*
    Display Opções Embutidas
*/
export function embeddedOptionsDisplay() {
    const [displayEmbeddedOptions, setDisplayEmbededOptions] = useState(false)

    function handleShowEmbeddedMenu(){
        setDisplayEmbededOptions(true)
    }

    function handleHideEmbeddedMenu(){
        setDisplayEmbededOptions(false)
    }

    return {
        displayEmbeddedOptions,
        handleShowEmbeddedMenu,
        handleHideEmbeddedMenu
    }
}

/*
    Função para "encapsular" as opções de menus secundários
*/
export function useEmbededOptions(option) {
    const [embededOptions, setEmbededOptions] = useState()

    useEffect(() => {
        if (option.embeddedOptions) {
            setEmbededOptions(option.embeddedOptions)
        }
    }, [])

    return embededOptions
}

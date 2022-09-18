import React, {useState, useEffect} from "react";
import { stack as Menu } from 'react-burger-menu'

function Dropdown () {
    let [screenType, setScreenType] = useState('mobile')

    /* get screen type */
    useEffect (() => {
        if (window.type !== "undefined" && window.innerWidth > 1024) {
        setScreenType('desktop')
        } else if (window.type !== "undefined" && window.innerWidth > 768) {
        setScreenType('tablet')
        }
    },[])

    if (screenType !== 'desktop') {
        return (
            <Menu className="menu" noOverlay>
                <a id="work" className="menu-item" href="/">work</a>
                <a id="play" className="menu-item" href="./play">play</a>
                <a id="about" className="menu-item" href="./about">about</a>
                <a id="resumer" className="menu-item" 
                href="https://drive.google.com/file/d/1sXXvIjqpciXud7wQvtqfMNJxJBrDALyS/view?usp=sharing"
                target="_blank"
                rel="noreferrer">
                resume</a>
            </Menu>
        )
    } else {
        return null
    }
}

export default Dropdown
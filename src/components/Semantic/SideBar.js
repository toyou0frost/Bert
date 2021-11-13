import React, { useState } from "react";
import styled from "styled-components";

import CodeEditor from "../Function/CodeEditor";

const SideBarStyle = styled.div`
    .sidebar_main{
        position: fixed;
        padding: 1.5vh 1.5vw;
        border-left: 2px solid gray;
        border-bottom: 2px solid gray;
    }
    .icon{
        padding-bottom: 1.5vh;
        width: 5vw;
    }
`

const SideBar = () => {
    const [language, setLanguage] = useState("javascript");
    const [isClick, setIsClick] = useState(false);

    const OnClick = (language) => {
        console.log(language);
        setIsClick(true);
        setLanguage(language);
    }

    return (
        <div className="SideBar">
            <SideBarStyle>
                <div className="sidebar_main">
                    <ul>
                        <li onClick={(e) => {OnClick("html")}}><img className="icon" src="img/HTMLicon.png" alt="html" /></li>
                        <li onClick={(e) => {OnClick("css")}}><img className="icon" src="img/CSSicon.png" alt="css" /></li>
                        <li onClick={(e) => {OnClick("javascript")}}><img className="icon" src="img/JSicon.png" alt="js" /></li>
                        <li onClick={(e) => {OnClick("xml")}}><img className="icon" src="img/XMLicon.png" alt="xml" /></li>
                        <li onClick={(e) => {OnClick("c")}}><img className="icon" src="img/Cicon.png" alt="c" /></li>
                    </ul>
                </div>
            </SideBarStyle>
            {isClick === true ? <CodeEditor language={language} /> : "" }
        </div>
    )
}

export default SideBar;
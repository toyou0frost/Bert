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
                        <li onClick={() => {OnClick("c")}}><img className="icon" src="img/HTMLicon.png" alt="c" /></li>
                        <li onClick={() => {OnClick("cpp")}}><img className="icon" src="img/JSicon.png" alt="cpp" /></li>
                        <li onClick={() => {OnClick("csharp")}}><img className="icon" src="img/XMLicon.png" alt="csharp" /></li>
                        <li onClick={() => {OnClick("objective-c")}}><img className="icon" src="img/JSicon.png" alt="objective-c" /></li>
                        <li onClick={() => {OnClick("java")}}><img className="icon" src="img/CSSicon.png" alt="java" /></li>
                        <li onClick={() => {OnClick("javascript")}}><img className="icon" src="img/CSSicon.png" alt="javascript" /></li>
                        <li onClick={() => {OnClick("php")}}><img className="icon" src="img/HTMLicon.png" alt="php" /></li>
                        <li onClick={() => {OnClick("python")}}><img className="icon" src="img/HTMLicon.png" alt="python" /></li>
                        <li onClick={() => {OnClick("ruby")}}><img className="icon" src="img/CSSicon.png" alt="ruby" /></li>
                        <li onClick={() => {OnClick("r")}}><img className="icon" src="img/HTMLicon.png" alt="r" /></li>
                    </ul>
                </div>
            </SideBarStyle>
            {isClick === true ? <CodeEditor language={language} /> : "" }
        </div>
    )
}

export default SideBar;
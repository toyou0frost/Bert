import React, { useState } from "react";
import styled from "styled-components";

import CodeEditor from "../Function/CodeEditor";

const SideBarStyle = styled.div`
    .sidebar_main{
        height: 100vh;
        background-color: #525252;
        display: flex;
    }
    .sidebar_main > ul{
        border-radius: 30px 0 0 30px;
        background-color: #afacac;
        box-shadow: 5px 5px 5px 5px;
    }
    .icon{
        padding: 1vh 2vh;
        height: 8vh;
    }
    li{
        cursor: pointer;
    }
`

const SideBar = () => {
    const [language, setLanguage] = useState("javascript");
    const [isClick, setIsClick] = useState(false);
    
    const OnClick = (language) => {
        setIsClick(true);
        setLanguage(language);
        document.getElementsByClassName("sidebar_main")[0].style.background = "linear-gradient(#1e1e1e 70%, #676767 30%)";
    }

    return (
        <SideBarStyle className="SideBar">   
                <div className="sidebar_main"> 
                    {isClick === true ? <CodeEditor language={language} setIsClick={setIsClick} /> : "" }            
                    <ul>
                        <li title="C" onClick={() => {OnClick("c")}}><img className="icon" src="img/CIcon.png" alt="c" /></li>
                        <li title="Cpp" onClick={() => {OnClick("cpp")}}><img className="icon" src="img/CPPIcon.png" alt="cpp" /></li>
                        <li title="C#" onClick={() => {OnClick("csharp")}}><img className="icon" src="img/CSHARPIcon.png" alt="csharp" /></li>
                        <li title="Objective-C" onClick={() => {OnClick("objective-c")}}><img className="icon" src="img/OCIcon.png" alt="objective-c" /></li>
                        <li title="JAVA" onClick={() => {OnClick("java")}}><img className="icon" src="img/JAVAIcon.png" alt="java" /></li>
                        <li title="JavaScript" onClick={() => {OnClick("javascript")}}><img className="icon" src="img/JSIcon.png" alt="javascript" /></li>
                        <li title="PHP" onClick={() => {OnClick("php")}}><img className="icon" src="img/PHPIcon.png" alt="php" /></li>
                        <li title="Python" onClick={() => {OnClick("python")}}><img className="icon" src="img/PYTHONIcon.png" alt="python" /></li>
                        <li title="Ruby" onClick={() => {OnClick("ruby")}}><img className="icon" src="img/RUBYIcon.png" alt="ruby" /></li>
                        <li title="R" onClick={() => {OnClick("r")}}><img className="icon" src="img/RIcon.png" alt="r" /></li>
                    </ul>
                </div>
        </SideBarStyle>
    )
}

export default SideBar;
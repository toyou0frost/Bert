import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CodeEditor from "../Function/CodeEditor";
import Folder from "../Screens/Folder";

const SideBarStyle = styled.div`
    .sidebar_main{
        height: 90vh;
        background-color: #1a1a1a;
        display: flex;
    }
    .sidebar_main > ul{
        background-color: #1a1a1a;
    }
    .icon{
        padding: 1vh 2vh;
        height: 8vh;
    }
    li{
        cursor: pointer;
    }
`

const SideBarf = () => {
    const [language, setLanguage] = useState("javascript");
    const [isClick, setIsClick] = useState(false);
    const [isExit, setIsExit] = useState(false);

    function exit(language){
        // document.getElementsByClassName("sidebar_main")[0].style.background = "linear-gradient(#525252 50%, #525252 50%)";
        // setIsExit(true);
        // setIsClick(false);
        // OnClick(language)
    }
    // 31 ~ 36 종료 버튼을 누를 시 코드 에디터를 종료하는 함수 

    const OnClick = (language) => {
        // setIsClick(true);
        // setIsExit(false);
        // setLanguage(language);
        // document.getElementsByClassName("sidebar_main")[0].style.background = "linear-gradient(#1e1e1e 70%, #676767 30%)";
    }
    // 39 ~ 44 아이콘을 클릭하면 해당 언어를 코드 에디터에 전달하고 코드 에디터를 보여지게하는 함수 

    return (
        <SideBarStyle className="SideBar">   
                <div className="sidebar_main"> 
                    {isClick === true ? <CodeEditor language={language} setIsClick={setIsClick} setIsExit={setIsExit} isExit={isExit} /> : "" }            
                    <ul>
                        <li title="C" onClick={() => {exit("c")}}><img className="icon" src="img/CIcon.png" alt="c" /></li>
                        <li title="Cpp" onClick={() => {exit("cpp")}}><img className="icon" src="img/CPPIcon.png" alt="cpp" /></li>
                        <li title="C#" onClick={() => {exit("csharp")}}><img className="icon" src="img/CSHARPIcon.png" alt="csharp" /></li>
                        <li title="Objective-C" onClick={() => {exit("objective-c")}}><img className="icon" src="img/OCIcon.png" alt="objective-c" /></li>
                        <li title="JAVA" onClick={() => {exit("java")}}><img className="icon" src="img/JAVAIcon.png" alt="java" /></li>
                        <li title="JavaScript" onClick={() => {exit("javascript")}}><img className="icon" src="img/JSIcon.png" alt="javascript" /></li>
                        <li title="PHP" onClick={() => {exit("php")}}><img className="icon" src="img/PHPIcon.png" alt="php" /></li>
                        <li title="Python" onClick={() => {exit("python")}}><img className="icon" src="img/PYTHONIcon.png" alt="python" /></li>
                        <li title="Ruby" onClick={() => {exit("ruby")}}><img className="icon" src="img/RUBYIcon.png" alt="ruby" /></li>
                        <li title="R" onClick={() => {exit("r")}}><img className="icon" src="img/RIcon.png" alt="r" /></li>
                        {/* 52 ~ 61 각 언어에 맞는 데이터를 전달하는 코드 */}
                    </ul>
                </div>
        </SideBarStyle>
    )
}

export default SideBarf;
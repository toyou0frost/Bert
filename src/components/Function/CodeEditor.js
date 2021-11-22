import React, { useState ,useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";

import CompilerAPI from "../GetAPI/CompilerAPI";

const CompileResultStyle = styled.div`
    .compileresult_main{
        display: flex;
        height: 45vh;
        flex-direction: column;
    }
    .compileresult_main_top{
        flex: 1;
        display: flex;
        background-color: #3d3d3d;
    }
    .compileresult_main_top > div{
        padding: 1.5vh 3vh;
        padding-left: 2vh;
        padding-bottom: 0;
    }
    .compileresult_main_top > :first-child > h4{
        letter-spacing: 1.5px;
        border-radius: 7px 7px 0 0;
        padding: 1vh 3.5vh;
        padding-top: 1.5vh;
        color: white;
        background-color: #676767;
        box-shadow: 5px 5px 5px black;
    }
    .compileresult_main_top > :last-child > h4{
        letter-spacing: 1.5px;
        border-radius: 7px 7px 0 0;
        padding: 1vh 3.5vh;
        color: white;
        background-color: #676767;
        /* box-shadow: 0px 0px 0px black; */
    }
    .compileresult_main_center{
        overflow: scroll;
        flex: 10;
        background-color: #676767;
        padding: 2vh 3vh;
    }
    .compileresult_main_center > div > p, .compileresult_main_center > div > pre{
        line-height: 150%;
        font-size: 1.1em;
    }
    .fixed_p{
        color: #c4c4c4;
    }
    .compile_result{
        color: white;
    }
    .compileresult_main_bottom{
        flex: 1;
        background-color: #676767;
    }
    .compileresult_main_bottom > .compile_btn{
        cursor: pointer;
        margin: 15px;
        border: none;
        border-radius: 20px;
        color: white;
        background-color: rgba(154, 164, 205, 1);
        font-size: 1.3em;
        padding: 1vh 3vh;
        box-shadow: 3px 3px 3px black;
    }
    .compileresult_main_bottom > .compile_btn:active{
        background-color: rgba(154, 164, 205, 0.7);
    }
    .compileresult_main_bottom > .exit_btn{
        cursor: pointer;
        margin: 15px;
        border: none;
        border-radius: 20px;
        color: white;
        background-color: rgba(179, 97, 97, 1);
        font-size: 1.3em;
        padding: 1vh 3vh;
        box-shadow: 3px 3px 3px black;
    }
    .compileresult_main_bottom > .exit_btn:active{
        background-color: rgba(179, 97, 97, 0.7);
    }
`

const CodeEditor = (props) => {
    const [result, setResult] = useState();
    const [value, setValue] = useState("");
    const [isClick, setIsClick] = useState(false);
    const [isGet, setIsGet] = useState(false);
    const [isGo, setIsGo] = useState("");
    const [compile, setCompile] = useState(false);

    const editorRef = useRef(null);

    useEffect (() => {
        if(result !== undefined){
            setIsGet(true);
        }
    }, [isGo])
    // 100 ~ 104 컴파일 API에서 데이터를 받아오면 작동하는 함수
    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor; 
    }

    function getValue() {
        setIsGet(false)
        setValue(editorRef.current.getValue());
        setIsClick(true);
        setCompile(true);
    }
    // 106 ~ 115 monaco 에디터에서 사용자가 입력한 값을 가져오는 함수
    function exit(){
        document.getElementsByClassName("sidebar_main")[0].style.background = "linear-gradient(#525252 50%, #525252 50%)";
        props.setIsExit(true);
        props.setIsClick(false);
    }
    // 117 ~ 121 종료 버튼을 누르면 코드 에디터가 꺼지는 함수
    return(
        <div className="CodeEditor">
            {props.isExit === false ? 
            <div>
                <Editor
                height="55vh"
                width="35vw"
                language={props.language}
                line="2"
                theme="vs-dark"
                options={{
                    minimap: {
                        enabled: false,
                    },
                    fontSize: 18,
                }}
                className="editor"
                onMount={handleEditorDidMount}
                />
                <div className="CompileResult">
                    <CompileResultStyle>
                        <div className="compileresult_main">
                            <div className="compileresult_main_top">
                                <div>
                                    <h4>실행결과 ( {props.language} )</h4>
                                </div>
                                <div>
                                    {/* <h4>{props.language}</h4> */}
                                </div>
                            </div>
                            <div className="compileresult_main_center">
                                <div>
                                    {compile === true ? <p className="fixed_p">프로세서가 실행되었습니다.</p> : ""}
                                    {isGet === true ? <pre className="compile_result">{result}</pre> : ""}
                                    {isGet === true ? <p className="fixed_p">프로세서가 종료되었습니다.</p> : ""}
                                </div>
                            </div>
                            <div className="compileresult_main_bottom">
                                <button className="compile_btn" onClick={getValue}>실행</button>  
                                <button className="exit_btn" onClick={exit}>종료</button>  
                            </div>
                        </div>   
                    </CompileResultStyle>
                </div>
                {isClick === true ? <CompilerAPI lang={props.language} source={value} setResult={setResult} setIsGo={setIsGo} setIsClick={setIsClick} />: ""}
            </div>
            : ""}
        </div>
        // 124 ~ 170 삼항 연산자를 활용하여 데이터의 존재 여부에 따라 보여지는 html이 달라지가 해주는 코드
    )
}

export default CodeEditor;
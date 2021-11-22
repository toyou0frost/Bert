import React, { useEffect, useState } from "react";

const CompilerAPI = (props) => {
    const CLIENT_SECRET = "9b4dc5ea7d6969c91aaafb57c7b5307a2047c4db";
    let LANG = "JAVASCRIPT_NODE";
    const SOURCE = props.source;
    props.setIsClick(false);
    // 7 API 재호출을 막기위한 코드
    switch(props.lang){
        case "c":
            LANG = "C";
            break;
        case "cpp":
            LANG = "CPP";
            break;
        case "javascript": 
            LANG = "JAVASCRIPT_NODE";
            break;
        case "csharp":
            LANG = "CSHARP";
            break;
        case "php":
            LANG = "PHP";
            break;
        case "objective-c":
            LANG = "OBJECTIVEC";
            break;
        case "java":
            LANG = "JAVA";
            break;
        case "python":
            LANG = "PYTHON3";
            break;
        case "ruby":
            LANG = "RUBY";
            break;
        case "r":
            LANG = "R";
            break;
        default :
            console.log("Language error");
            break;
    }
    // 9 ~ 43 monaco 에디터에서 사용하는 언어 표현과 API에서 사용하는 언어의 표현이 서로 달라 API 에서 사용하는 규정에 따라 언어를 변환하는 코드
    useEffect (() => {
        if(SOURCE === ""){
            props.setResult(SOURCE);
            props.setIsGo(Math.random(100));
            return
        }
        Compile()
    },)
    // 45 ~ 52 사용자가 입력한 코드가 없으면 바로 return 해주는 코드
    async function Compile(){
        await fetch("https://api.hackerearth.com/v4/partner/code-evaluation/submissions/", { 
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "client-secret": CLIENT_SECRET,
            },
            body: JSON.stringify({
                "lang": LANG,
                "source": SOURCE,
                "memory_limit": 243232,
                "time_limit": 5,
            }),
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            GetUpdateUrl(data.status_update_url)
        })
        .catch((e) => {
            console.log(e);
        })
    }
    async function GetUpdateUrl(url){
        await fetch(`${url}`, {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                "client-secret": CLIENT_SECRET,
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            GetResult(data.status_update_url)
        })
        .catch((e) => {
            console.log(e);
        })
    }
    
    async function GetResult(url){
        await fetch(`${url}`, {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                "client-secret": CLIENT_SECRET,
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //data.result.run_status.output
            if(data.result.compile_status === null){
                GetResult(data.status_update_url);
                return
            }
            if(data.result.compile_status !== "OK"){
                props.setResult(data.result.compile_status);
                props.setIsGo(data);
                return
            }
            if(data.result.run_status.output === null){
                GetResult(data.status_update_url);
                return
            }
            loadFile(data.result.run_status.output)
        })
        .catch((e) => {
            console.log(e);
        })
    }
    /* 54 ~ 128 첫번째 API 호출 https://www.hackerearth.com/docs/wiki/developers/v4/ 해당 API문서를 참고해보면 총 3회에 걸처 API호출이 이루어짐 
    첫 번째 호출에서는 현재 컴파일 상태와 다음 상태를 확인할 수 있는 URL이 주어짐 해당 URL로 다시 API 호출
    두 번째 호출헤서는 컴파일 에러 여부와 다음 상태를 확인할 수 있는 URL이 주어짐 해당 URL로 다시 API 호출
    세 번째 호출에서는 2가지 케이스로 나뉨
    case 1: 컴파일이 완료되었을 때 
    case 2: 아직 컴파일 중 일 때
    case 1에서는 최종 컴파일 에러 여부와 output을 확인할 수 있는 URL이 제공됨
    case 2에서는 두 번째 호출과 같은 형태의 데이터가 제공됨
    */
    function loadFile(URL){
        var reader = new XMLHttpRequest();
        reader.open('GET', URL, true);
        reader.overrideMimeType('text/plain; charset=utf-8');
        reader.onload = function() {
            if (reader.status == 200) {
                props.setResult(reader.responseText);
                props.setIsGo(URL);
            };
        };
        reader.send(null);
    }
    // 138 ~ 149 최종 API 호출에서 전달받은 output URL에 접근하면 특정 파일을 다운로드 받게 하고 다운받은 파일 내부에 output이 있는 형태임
    // 이러한 문제를 해결하기 위해 파일을 다운받지 않고 text형태로 변환한 뒤 데이터만 가져오게하는 함수
    return(
        <div></div>
    )
}
// 중간중간 setIsGo에 이상한 값이 들어가는 이유는 API호출이 완료됨을 나타내는 변수인데 직전 호출과 다른 값을 제공하여 useEffect에서 걸리게 하기 위함
export default CompilerAPI;
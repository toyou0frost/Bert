import React, { useEffect, useState } from "react";

const CompilerAPI = (props) => {
    const CLIENT_SECRET = "9b4dc5ea7d6969c91aaafb57c7b5307a2047c4db";
    let LANG = "JAVASCRIPT_NODE";
    const SOURCE = props.source;
    props.setIsClick(false);

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

    useEffect (() => {
        if(SOURCE === ""){
            props.setResult(SOURCE);
            props.setIsGo(Math.random(100));
            return
        }
        Compile()
    },)

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
    return(
        <div></div>
    )
}

export default CompilerAPI;
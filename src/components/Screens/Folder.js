import React, { useDebugValue, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Semantic/Header";
import { getDatabase, ref, set, update, child, get} from "firebase/database";

import { Popup } from "./Popup";


const FolderStyle = styled.div`
    background-color: #151515;
    height: 90vh;

    header{
        background-color: #2f2f2f;
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: space-between;
    }
    .header_p{
        color: white;
    }
    .header_btn{
        font-size: 1.3em;
        background-color: #2f2f2f;
        color: white;
        border: none;
        cursor: pointer;
    }
    .list{
        color: white;
        display: flex;
        align-items: center;
        padding: 0.5vh;
    }
    .doc{
        width: 3vh;
    }
    .folder{
        width: 4vh;
    }
`
let arr;
let folderArr;

const Folder = (props) => {
    const [popup, setPopup] = useState(false);
    const [i, setI] = useState(2);
    const [list, setList] = useState([]);
    const [folderList, setFolderList] = useState([]);
    const [update, setUpdate] = useState(false);
    const [folderUpdate, setFolderUpdate] = useState(false);

    useEffect(() => {
        setList([]);
        getFileName()
    }, [update])

    useEffect(() => {
        setFolderList([]);
        getFolderName();
    }, [folderUpdate])

    useEffect(() => {
        changeList();
    }, [list])

    useEffect(() => {
        // console.log(arr);
    }, [arr])

    useEffect(() => {
        // console.log(folderArr);
    }, [folderArr])

    useEffect(() => {
        changeFolderList();
    }, [folderList])

    const getFileName = () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `project/${props.s_id}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                for(let j = 1; j < i; j++){
                    const file = "file" + j;
                    setList(prevState => [...prevState, snapshot.val()[file]]);
                }
            } else {
                console.log("No data available");
            }
            })
        .catch((error) => {
            console.error(error);
        });
    }

    const getFolderName = () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `project/${props.s_id}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                for(let key in snapshot.val()){
                    if(key === "2021122912042231"){
                        return
                    }
                    if(typeof(snapshot.val()[key]) === "object"){
                        setFolderList(prevState => [...prevState, key]);
                    }
                }
            } else {
                console.log("No data available");
            }
            })
        .catch((error) => {
            console.error(error);
        });
    }

    const listClick = (e) => {
        const value = e.target.id;
        const dbRef = ref(getDatabase());
        get(child(dbRef, `project/${props.s_id}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                for(let j = 1; j < i; j++){
                    const file = "file" + j;
                    if(snapshot.val()[file] === value){
                        props.setCode("code" + j);
                        props.setLang("lang" + j);
                    }
                }
            } else {
                console.log("No data available");
            }
            })
        .catch((error) => {
            console.error(error);
        });
        for(let j = 0; j  < document.getElementsByClassName("list").length; j++){
            document.getElementsByClassName("list")[j].style.backgroundColor = "#151515";
        }
        e.target.style.backgroundColor = "#2f2f2f";
    }

    const addClick = () => {
        setUpdate(false);
        setFolderUpdate(false);
        setPopup(true);
    }

    const changeList = () => {
        arr = list.map((value, key) => <li key={key} className="list" onClick={listClick} id={value}>&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/doc.png" alt="doc" className="doc" />&nbsp;&nbsp;&nbsp;&nbsp;{value}</li>)
    }

    const changeFolderList = () => {
        folderArr = folderList.map((value, key) => <li key={key} className="list" onClick={listClick} id={value}>&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/folder.png" alt="folder" className="folder" />&nbsp;&nbsp;&nbsp;&nbsp;{value}</li>)
    }

    return(
        <FolderStyle>
            <header>
                <p className="header_p">
                    Project
                </p>
                <button className="header_btn" onClick={addClick}>+</button>
            </header>
            {popup && <Popup onClose={setPopup} setS_Id={props.setS_Id} s_id={props.s_id} i={i} setI={setI} setUpdate={setUpdate} setFolderUpdate={setFolderUpdate}/>}
            <div>
                <ul>
                    <li className="list"><img src="img/Folder.png" alt="folder" className="folder" />&nbsp;&nbsp;&nbsp;&nbsp;root</li>
                    {folderArr}
                    {arr}
                </ul>
            </div>
        </FolderStyle>
    )
}

export default Folder;
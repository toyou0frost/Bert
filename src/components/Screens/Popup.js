import React, { useDebugValue, useEffect, useState } from "react";
import styled from "styled-components";
import { getDatabase, ref, set, update, child, get} from "firebase/database";

const PopupStyle = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0,0,0,0.9);
    color: white;

    .popup_main_div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popup_main_div > input{
        margin: 1vh 1vh;
        padding: 2.5vh;
        border: none;
        border-radius: 5px;
        background-color: rgba(194, 194, 194, 1);
    }
    input[type=text]{
    }
    input[type=button]{
        cursor: pointer;
    }
    input[type=button]:active{
        background-color: rgba(194, 194, 194, 0.8);
    }
`

export const Popup = (props) => {
    const { onClose } = props;    
    const [fileName, setFileName] = useState('');
    const [folderName, setFolderName] = useState('');

    const fileHandleOnChange = (e) => {
        setFileName(e.target.value);
    }

    const folderHandleOnChange = (e) => {
        setFolderName(e.target.value);
    }

    useEffect(() => {
        console.log(props.s_id);
    }, [props.s_id])


    const createData = () => {
        props.setUpdate(true);
        const today = new Date(); 
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        const milliseconds = today.getMilliseconds(); 
        const id = `${year}${month}${date}${hours}${minutes}${seconds}${milliseconds}`;
        props.setS_Id(id);
        const db = getDatabase();   
        set(ref(db, '/project/'+id), {
            code1: "",
            lang1: "",
            file1: fileName
        });
    }

    const createFile = () => {
        props.setUpdate(true);
        props.setI(props.i + 1);
        const code = "code"+props.i;
        const lang = "lang"+props.i;
        const file = "file"+props.i;
        const db = getDatabase();
        update(ref(db, `/project/${props.s_id}`), {
            [code]: "",
            [lang]: "",
            [file]: fileName
        });
    }

    const createFolder = () => {
        props.setFolderUpdate(true);
        const db = getDatabase();
        set(ref(db, `/project/${props.s_id}/` + folderName), {
            code1: "",
            lang1: "",
            file1: fileName
        });
    }

    return(
        <PopupStyle>
            <div className="popup_main_div">
                <input type="text" placeholder="파일 명" onChange={fileHandleOnChange} />
                <input type="button" value="파일생성" onClick={() => {
                    if(props.s_id === ""){
                        createData();
                    }
                    else{
                        createFile();
                    }
                    onClose(false);
                }} />
                <input type="text" placeholder="폴더 명" onChange={folderHandleOnChange} />
                <input type="button" value="폴더생성" onClick={() => {
                    createFolder();
                    onClose(false);
                }} />
                <input type="button" value="취소" onClick={() => {
                    onClose(false);
                }} />
            </div>
        </PopupStyle>
    )
}
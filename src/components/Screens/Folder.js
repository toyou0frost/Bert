import React from "react";
import styled from "styled-components";
import Header from "../Semantic/Header";

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
`

const Folder = () => {
    
    const addClick = () => {

    }

    return(
        <FolderStyle>
            <header>
                <p className="header_p">
                    Project
                </p>
                <button className="header_btn" onClick={addClick}>+</button>
            </header>
        </FolderStyle>
    )
}

export default Folder;
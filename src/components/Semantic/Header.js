import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
    padding: 0;
    margin: 0;
    border-bottom: 1px solid gray;
    display: flex;
    background-color: #2f2f2f;

    .logo{
        width: 10vh;
    }
`

const Header = () => {
    return(
        <HeaderStyle className="Header">
            <Link to="/"><img className="logo" src="img/logo1.png" alt="logo" /></Link>
        </HeaderStyle>
    )
}

export default Header;
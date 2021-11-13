import React from "react";
import styled from "styled-components";

const SearchFormStyle = styled.div`
    :nth-child(n){
        display: flex;
        justify-content: center;
    }
    .searchform_main{
        border: 1px solid gray;
        padding: 1.5vh 1.5vw;
        width: 70vw;
    }
    .searchform_main > a {
        font-size: 1.3em;
        text-decoration: none;
    }
    .searchform_main > a:active {
        color: gray;
    }
    .searchform_main > a > cite {
        font-size: 0.7em;
        color: gray;
    }
    .searchform_main > p {
        font-size: 0.9em;
    }
`
const SearchForm = (props) => {
    const link = props.link.substring(0, 50);
    return(
        <SearchFormStyle>
            <div>
                <div className="searchform_main">
                    <a href={props.link} target="_blank"> {/* 테스트용 실제로는 target속성 X*/}                       
                        <cite>{link}</cite>
                        <div dangerouslySetInnerHTML={{__html: props.htmlTitle}}></div>
                    </a>
                    <p dangerouslySetInnerHTML={{__html: props.htmlSnippet}}></p>
                </div>
            </div>
        </SearchFormStyle>
    )
}

export default SearchForm;
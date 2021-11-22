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
        width: 50vw;
        background-color: #afacac;
        margin-bottom: 3vh;
        border-radius: 10px;
        box-shadow: 2px 2px 2px 2px;
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
    const link = props.link.substring(0, 25);
    // 34 구글 서치 API에서 가져온 텍스트에서 한글이 포함된 경우 문자열이 너무 길어지는 현상 때문에 서치 폼 밖까지 텍스트가 나오는 현상을 방지
    return(
        <SearchFormStyle>
            <div>
                <div className="searchform_main">
                    <a href={props.link} target="_blank">                      
                        <cite>{link}</cite>
                        <div dangerouslySetInnerHTML={{__html: props.htmlTitle}}></div>
                        {/* 42, 45 구글 서치 API에서 가져온 데이터에 <br /> <b></b> 등 html 문법이 사용되어 있는 경우가 있기 때문에 html 문자를 적용해서 텍스트를 띄우는 코드 */}
                    </a>
                    <p dangerouslySetInnerHTML={{__html: props.htmlSnippet}}></p>
                </div>
            </div>
        </SearchFormStyle>
    )
}

export default SearchForm;
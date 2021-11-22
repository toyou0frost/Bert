import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GoogleSearchAPI from "../GetAPI/GoogleSearchAPI";

const MainStyle = styled.div`
  .search_main {
    display: flex;
    margin: 1vh 0;
    justify-content: center;
  }
  .search_main > *{
    padding: 5px;
  }
  .search_main > button{
    cursor: pointer;
    border: none;
    height: 6vh;
    border-left: none;
    border-radius: 0 10px 10px 0;
    background-color: rgba(175, 172, 172, 1);
    box-shadow: 5px 5px 5px black;
  }
  .search_main > button:active{
    background-color: rgba(175, 172, 172, 0.7);
  }
  .search_main > button > img{
    height: 3vh;
    user-select: none;
  }
  .search_main > input[type=text]{
    color: #e6e6e6;
    font-size: 1em;
    border: none;  
    width: 40vw;
    height: 6vh;
    border-right: none;
    border-radius: 10px 0 0 10px;
    background-color: rgba(175, 172, 172, 1);
    box-shadow: 5px 5px 5px black;
  }
  .search_main > input[type=text]:focus-visible{
    outline: none;
  }
  input::placeholder {
    color: #e6e6e6;
  }
  .search_logo{
    margin-top: 10vh;
    display: flex;
    justify-content: center;
  }
  .search_main_logo{
    height: 35vh;
  }
  .search_main_searchlogo{
    cursor: pointer;
    padding: 0;
    height: 7vh;
  }
  .search_main_isSearch{
    margin-top: 3vh;
  }
`

function Main() {
  const [searchInput, setSearchInput] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const Click_Search_Button = () => {
    if(document.getElementById("data").value === ""){
      return
    }
    // 71 ~ 73 검색어에 null 값이 들어오면 바로 return
    setSearchInput(document.getElementById("data").value);
    setIsSearch(true);
  }
  // 66 ~ 77 검색 버튼을 누르면 검색 API로 전달하게 해주는 함수 

  useEffect(() => {
    const input = document.getElementById("data");
    input.focus();
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("inputbtn").click();
    }
    });
  })
  // 80 ~ 89 엔터키 입력시 자동으로 검색이 되게하는 함수 
  const Main_Page = () => {
    setIsSearch(false);
  }
  // 91 ~ 93 검색하기 전 상태로 되돌리는 함수
  return (
    <div className="Main">
      <MainStyle>
        {isSearch === false ? 
        <div className="search_logo">
          <img src="img/logo1.png" alt="main_logo" className="search_main_logo" />
        </div>
        : ""}
        {isSearch === false ? 
        <div className="search_main">
          <input id="data" placeholder="type in the search word" type="text"/>
          <button id="inputbtn" onClick={Click_Search_Button}><img src="img/search_btn.png" alt="검색" /></button>
        </div>  
        : 
        <div className="search_main search_main_isSearch">
          <img src="img/logo3.png" alt="searchlogo" onClick={Main_Page} className="search_main_searchlogo"/>
          <input id="data" placeholder="type in the search word" type="text"/>
          <button id="inputbtn" onClick={Click_Search_Button}><img src="img/search_btn.png" alt="검색" /></button>
        </div>  
        }
        {isSearch === true ? <GoogleSearchAPI getSearchInput={searchInput} /> : ''}
        </MainStyle>
    </div>
    // 96 ~ 117 삼항 연산자를 사용하여 검색 여부에 따라 보여지는 화면이 다르게 하는 코드
  );
}

export default Main;
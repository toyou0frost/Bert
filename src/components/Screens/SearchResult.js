import React, { useEffect, useState } from "react";
import SearchForm from "../Form/SearchForm";

const ShowSearchResult = (props) => {
    const [isGet, setIsGet] = useState(false);
    const idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let htmlSnippet = new Array(10);


    if(props.searchdata !== undefined){
        for(let i = 0; i < 10; i++){
            if(props.searchdata[i].htmlSnippet === undefined){
                htmlSnippet[i] = null;
            }
            else{
                htmlSnippet[i] = props.searchdata[i].htmlSnippet;
            }
        }
    }
    // 10 ~ 19 서치 API 에서 htmlSnippet의 값이 없는경우가 있어서 그 경우 null을 채워넣는 코드
    useEffect(() => {
        if(props.searchdata !== undefined){
            setIsGet(true);    
        }
        else{
            setIsGet(false);
        }
    },[props])
    // 21 ~ 28 검색 결과를 다 받지 못하였다면 데이터를 전달하지 않고 온전한 결과를 다 받아야 데이터를 넘겨주는 함수
    return(
        <div>
            {idx.map((tmp, idx) => (
                isGet === true ? <SearchForm htmlTitle={props.searchdata[idx].htmlTitle} htmlSnippet={htmlSnippet[idx]} link={props.searchdata[idx].link}    /> : ""                
            ))}
            {/* 32 ~ 34 반복문을 사용하여 총 10개의 데이터를 전달하고 나타내는 코드 */}
        </div>
    )
}

export default ShowSearchResult;
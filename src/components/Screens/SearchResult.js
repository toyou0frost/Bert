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
    useEffect(() => { // useEffect 실행 후 다시 처음부터 코드가 실행됨!!
        if(props.searchdata !== undefined){
            setIsGet(true);    
        }
        else{
            setIsGet(false);
        }
    },[props])

    return(
        <div>
            {idx.map((tmp, idx) => (
                isGet === true ? <SearchForm htmlTitle={props.searchdata[idx].htmlTitle} htmlSnippet={htmlSnippet[idx]} link={props.searchdata[idx].link}    /> : ""                
            ))}
        </div>
    )
}

export default ShowSearchResult;
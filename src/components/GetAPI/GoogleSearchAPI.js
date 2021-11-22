import React, { useCallback, useEffect, useState } from "react";
import ShowSearchResult from "../Screens/SearchResult";
import axios from "axios";

const GoogleSearchAPI = (getSearchInput) => {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(false);

    const API_KEY = "AIzaSyD_qbTQ5Sxe3nDfZRsLuM0DeavUx3Bl-l0";
    const ENGINE_ID = "bf2cd8836b09976d4";
    const SEARCH_INPUT = getSearchInput;
    // 11 사용자가 입력한 검색어를 변수에 저장
    let APiResult = new Array();
    const getItems = useCallback(async () => {
        setLoading(true);
        await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${SEARCH_INPUT.getSearchInput}`) 
            .then((res) => {
                APiResult = res.data.items;
                return res.data.items
            })
            .catch((e) => {
                console.log("Google Search API Err : ", e);
            })
        setLoading(false);
        return APiResult;
    })
    // 14 ~ 26 구글 서치 API 호출 
    useEffect(() => {
        getItems()
        .then((res) => {
            setItems(res);
        })
        .catch((e) => {
            console.log("API function error : ", e);
        })
    }, [SEARCH_INPUT])
    // 28 ~ 36 사용자가 입력한 데이터가 변할 때 마다 검색 결과를 다시 가져오는 함수

    return(
        <div>
            {loading === false ? <ShowSearchResult searchdata={items} /> : ''}
            {/* API 호출이 끝나면 검색 결과를 보여주는 컴포넌트로 이동 */}
        </div>
    )
}

export default GoogleSearchAPI;
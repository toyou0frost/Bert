import React, { useCallback, useEffect, useState } from "react";
import ShowSearchResult from "../Screens/SearchResult";
import axios from "axios";

const GoogleSearchAPI = (getSearchInput) => {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(false);

    const API_KEY = "AIzaSyD_qbTQ5Sxe3nDfZRsLuM0DeavUx3Bl-l0";
    const ENGINE_ID = "bf2cd8836b09976d4";
    const SEARCH_INPUT = getSearchInput;
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
    useEffect(() => {
        getItems()
        .then((res) => {
            setItems(res);
        })
        .catch((e) => {
            console.log("API function error : ", e);
        })
    }, [SEARCH_INPUT])

    return(
        <div>
            {loading === false ? <ShowSearchResult searchdata={items} /> : ''}
        </div>
    )
}

export default GoogleSearchAPI;
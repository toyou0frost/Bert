import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [input, setInput] = useState("");
  const history = useHistory();
  
  const search = (e) => {
    e.preventDefault();
    console.log("검색");


    history.push("/search")
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div className="search_buttons">
        <Button variant="outlined" type="submit" onClick={search}>
          검색
        </Button>
      </div>
    </form>
  );
}

export default Search;
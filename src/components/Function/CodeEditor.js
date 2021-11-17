import React, { useState ,useRef } from "react";
import Editor from "@monaco-editor/react";

import CompilerAPI from "../GetAPI/CompilerAPI";

const CodeEditor = (props) => {
    const [value, setValue] = useState("");
    const [isClick, setIsClick] = useState(false);

    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor; 
    }
    
    function showValue() {
        setValue(editorRef.current.getValue());
        setIsClick(true);
    }

    return(
        <div>
            <Editor
                height="55vh"
                width="40vw"
                defaultLanguage={props.language}
                line="2"
                theme="vs-dark"
                options={{
                    minimap: {
                        enabled: false,
                    },
                    fontSize: 18,
                }}
                className="editor"
                onMount={handleEditorDidMount}
            />
            <button onClick={showValue}>RUN</button>  
            {isClick === true ? <CompilerAPI lang={props.language} source={value} /> : ""}
        </div>
    )
}

export default CodeEditor;
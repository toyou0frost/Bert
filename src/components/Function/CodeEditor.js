import React from "react";
import styled from "styled-components";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const CodeEditor = (props) => {
    return(
        <div>
            <Editor
                height="90vh"
                width="50vw"
                defaultLanguage={props.language}
            />
        </div>
    )
}

export default CodeEditor;
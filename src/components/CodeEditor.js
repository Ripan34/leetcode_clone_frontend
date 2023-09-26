import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import Editor from "@monaco-editor/react";
import { useAuth } from '../service/authContext';
import { Link } from "react-router-dom";

const CodeEditor = (props) => {
  const user = useAuth();

  return (
    <div style={{backgroundColor: '#1e1e1e', paddingTop: '10px', height: '100%', width: '100%', position: 'relative'}}>
      <Editor
        height='100%'
        defaultLanguage="javascript"
        defaultValue={props.starterCode}
        onChange={props.handleEditorChange}
        theme="vs-dark"
        options={{
          showFoldingControls: 'never'
        }}
      />
      {!user && <div style={{
        backgroundColor: '#29394f',
        padding: '10px',
        position: 'absolute',
        bottom: 0,
        width: '98%',
        color: '#ffffff',
        fontSize: '13px'
      }}>You need to <Link style={{color: '#0a84ff'}}>Login</Link> / <Link style={{color: '#0a84ff'}}>Sign up</Link> to run or submit</div>}
    </div>
  );
}

export default CodeEditor;

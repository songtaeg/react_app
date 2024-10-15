import { useState } from "react";

function App(){
    //const [text,setText]=useState("");
    // const printText = (e)=>{
    //     setText(e.target.value);
    // }

    const [text,printText]=useState("");

    return <>
        <input value={text} onChange={(e)=>{
            printText(e.target.value);
        }}></input>
        {/* <input value={text} onChange={printText}></input> */}
        <div>{text}</div>
    </>
}

export default App;
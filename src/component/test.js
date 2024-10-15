import { useState } from "react";


function App(){
    const[txt,settxt]=useState("1번 메뉴");
    // const state=useState(0);
    // const txt = state(0);
    // const settxt =state(1);

    return(<>
    <div>
        <button onClick={()=>{
            settxt("1번 메뉴");
        }}> 
            1번 메뉴 </button>

        <button onClick={()=>{
            settxt("2번 메뉴");
        }}> 
            2번 메뉴 </button>

        <div>{txt}</div>
    </div>
    </>);
}

export default App;
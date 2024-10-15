import { useState } from "react";
function App(){
    const[list,setList] = useState(["자바","오라클"]);
    const[subject,setSubject] = useState("");
    return <>
        <input value={subject} onChange={(e)=>{
            setSubject(e.target.value);
        }}></input> <button>추가</button>

        <div>{list.map(item=>{
            return <li key={item}> {item} </li>
        })}</div>
    </>
}

export default App;
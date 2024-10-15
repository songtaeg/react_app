import { useState } from "react";


function App(){
    const[count,setCount]=useState(0);
    const[inputcnt, setInputcnt]=useState(1);
    
    const increment = ()=>{
        setCount(prev=>prev + Number(inputcnt));
    }
    const decrement = ()=>{
        setCount(Math.max(count - Number(inputcnt), 0));
        
    }
    const reset = ()=>{
        setCount(0);
    }

    return(<>
    <div>현재카운트: {count}</div>
    <div>
        <input value={inputcnt} onChange={(e)=>{
            setInputcnt(e.target.value);
        }}></input>
    </div>
    <div>        
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <button onClick={reset}>초기화</button>
    </div>
    </>);
}

export default App;
import { useState } from "react";

function App(){
    const [count, setCount]= useState(0);
    return<>
        <div> 현재: {count} </div>
        <button onClick={()=>
            setCount(count+1)
        }>증가</button>

        <button onClick={()=>
            setCount(count-1)
        }>감소</button>

        <button onClick={()=>
            setCount(0)
        }>초기화</button>

    </>
}


export default App;
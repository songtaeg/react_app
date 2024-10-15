import { useState } from "react";

function App(){
    var cnt = useState(99); //[0, function()]
    //var countFunc = cnt[0];

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount();
    }

    return <>
        <div>{cnt}</div>
        <button onClick={increment}>증가</button>
    </>
}

export default App;
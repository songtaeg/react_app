import { useRef, useState } from "react";
import Input from "./component1017/Input";
import Result from "./component1017/Result";


function App() {
  const num =useRef();
  const num2 =useRef();
  const [result,setResult]=useState({num:"",num2:""});

  const calc=()=>{
    setResult({
      num:num.current.value,
      num2:num2.current.value,
    });
  };
  
  return (
    <>
      <Result num={result.num} num2={result.num2} />
      <div>
          <input ref={num} placeholder='1번째 숫자'></input> <br></br>
          <input ref={num2} placeholder='2번째 숫자'></input> <br></br>
          {/* <input placeholder='+,-,*,/'></input> <br></br> */}
          <button onClick={calc}>계산</button>
      </div>
    </>
  );
}

export default App;

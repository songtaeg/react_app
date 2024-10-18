//주로 여러 상태 변수를 관리하거나 상태 업데이트 로직이 복잡할 때 유용하게 사용
import { useReducer, useRef } from "react"; 

const reducer =(prev,action)=>{
  if(action.req == "결제"){
    return prev - Number(action.money);
  }else if(action.req == "환불"){
    return prev + Number(action.money);
  }
}

function App() {
  const [money,dispatch]=useReducer(reducer,100000); 
  const moneyRef=useRef();
  return (
    
      <div className="app">
        {money}
        <div><input ref={moneyRef}></input></div>
        <div>
          <button onClick={()=>{
            //특정 액션을 리듀서 함수에 전달하여 상태를 변경하도록 지시
            dispatch({money: moneyRef.current.value, req:"결제"});
          }}>결제</button> 

          <button onClick={()=>{
            dispatch({money: moneyRef.current.value, req:"환불"});
          }}>환불</button> 
        </div>
      </div>
    
  );
}

export default App;

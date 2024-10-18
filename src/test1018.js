import React,{ useReducer} from "react";

const reducer =(state,action)=>{
  switch(action.req){
    case "찬성":
      return {no:state.no, yes:state.yes+1};
    case "반대":
        return {...state, no:state.no+1};
    case "초기화":
      return {yes:0,no:0};
    default:
      return state;      
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,{yes:0,no:0});

  return (
      <div className="app">
        <h1>투표 시스템</h1>
        <div>찬성:{state.yes}</div>
        <div>반대:{state.no}</div>

        <button onClick={()=>{
          dispatch({ req:"찬성"});
        }}>찬성</button>

        <button onClick={()=>{
          dispatch({ req:"반대"});
        }}>반대</button>

        <button onClick={()=>{
          dispatch({ req:"초기화"});
        }}>초기화</button>

      </div>
    
  );
}

export default App;

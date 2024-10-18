import React,{useReducer} from 'react';

const reducer=(state,action)=>{
  if(action.type ==="up"){
    return state = state+1;
  } else if(action.type ==="down"){
    return state = state-1;
  }else{
    return state;
  }

}
function App(props) {
  const [Number,dispatch] = useReducer(reducer,10);
  return (
    <div>
      <div>{Number}</div>
      <button onClick={()=>{
        dispatch({type:"up"});
      }}>증가</button>
      <button onClick={()=>{
        dispatch({type:"down"});
      }}>감소</button>
    </div>
  );
}

export default App;


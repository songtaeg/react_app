import { useState } from "react";
function Main(){
    <div>메인페이지</div>;
}
function MyPage(){
    <div>마이페이지</div>;
}

function App(){
    const[menu,setMenu]=useState(1);
    // 1번 메뉴 : 홈
    // 2번:마이 페이지 
    var display="";
    if(menu == 1){
        display=<Main></Main>;
    }else{
        display=<MyPage></MyPage>;
    }

    return(
    <div className="App">
        <button onClick={()=>{setMenu(1)}}>1번</button>
        <button onClick={()=>{setMenu(2)}}>2번</button>
        {display}
        {menu == 1 ? <Main></Main> : <MyPage></MyPage>}
    </div>
    );
}

export default App;
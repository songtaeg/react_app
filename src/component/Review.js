//리액트 -> 컴포넌트의 조합

function Header(props){ //파라미터
    var header = "";
    if(props.select == "kor"){
        header = <div>헤더</div>
    }else{
        header = <div>header!</div>
    }
    return {header}
}

function App(){
    return<>
       <Header select="kor"></Header>
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <div>푸터</div>
    </>
}

export default App;
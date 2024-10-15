function Header(props){
    return <div>
                {props.text}
            </div>
}
function Body(props) {
    var list = [];
    props.list.forEach(element => {
        list.push(<li key={element}><a href="#" onClick={()=>{
            props.printSubject(element);
        }}>{element} </a></li>);
    });
    return <div>
                <ul>
                    {list}
                </ul>
            </div>
}
function Footer(props){
    return <div>
        {props.text}
    </div>
}

function App(){
    var list = ["자바", "오라클", "html"];
    return (<div>
        <Header text="Web Header!"></Header>
        <Body list={list} printSubject={(subject)=>{
            alert(subject);
        }}></Body>
        <Footer text="Web Footer!"></Footer>
    </div>);
}

export default App;

function Header(props){
  
  return <div id="header">
            <div>
              <a href="#" onClick={()=>{
               props.printText();
              }}>{props.title}</a>
            </div>
        </div>
}
function Main(props){
  var list=[];

  props.list.forEach(element => {
    list.push(<li key = {element}> {element} </li>);
  });

  return <div id="main">
            <ul>
              {list}
            </ul>
        </div>
}

function Footer(props){
  return <div id="footer">
          <div>
            <a href="#" onClick={()=>{
              props.printText(props.message);
            }}>
              {props.message}
            </a>
          </div>
        </div>
}


function App() {
  var subject1=["java","javascript","oracle"];
  var subject2=["html","css","react","mysql"];
  //main,footer 컴포넌트 생성,부착
  return (
    <>
      <Header title="react 시작" printText={()=>{
        console.log("함수 보내기 테스트");
      }}></Header>

      <Header title="react 재밌어?" printText={()=>{
        alert("함수 보내기 테스트2");
      }}></Header>

      <Header title="html?"></Header>

      <Main list={subject1}></Main>
      <Main list={subject2}></Main>

      <Footer message="asdf" printText={(text)=>{
        alert(text);
      }}></Footer>
    </>
  );
}

export default App;

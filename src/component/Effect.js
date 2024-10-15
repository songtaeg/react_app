import { useEffect,useState } from "react";

function Table(props){
    return<>
        {props.list.map(item=>{
            return <tr>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.email}</td>
                <td>{item.birthDate}</td>
            </tr>
        })}
    </>
}
function App(){
   // const [count,setCount] = useState(0);
    //const [menu,setMenu] = useState(0);
    const [userList, setUserList] = useState([]);

    // useEffect(()=>{
    //     setMenu(1);
    //     console.log("실행");
    // });
    useEffect(()=>{
        async function userList(){
            const res= await fetch("https://jsonplaceholder.org/users");
            const result = await res.json();
            setUserList(result);
        }
        userList();
    },[]);

    return<>
        <Table list={userList}></Table>
    </>
}

export default App;
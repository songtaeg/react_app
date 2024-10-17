//입력값 3글자 이상 아니라면 "3글자 이상" 메시지 출력
//저장 버튼 누르면 하단 목록 추가
//최초 마운트 시, 저장버튼으로 추가 시 input focus
//3글자 이상 아닌상태에서 저장 버튼 누르면 경고창(alert, 3글자 이상)
import React, { useEffect, useRef, useState } from 'react';

function Test3(props) {
    const [list,setList] = useState([]);
    const [inputValue,setInputValue]=useState("");
    const input = useRef();
    
    useEffect(()=>{
        input.current.focus();
        console.log(input);
    },[]);

    const add = ()=>{
        if(inputValue.length<3){
            alert("3글자 이상 입력!!");
            return;
        }

        setList((prev)=>{
            console.log(prev);
            return ([...prev, inputValue]);
        });

        setInputValue("");
    }
    return (
        <div>
            <input ref={input} value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value);
            }}></input>
            <button onClick={add}>추가</button>
            {inputValue.length <3 && <p style={{color:'red'}}>3글자 이상 입력 </p>}
            <h3>이전 입력 값:</h3>
            <div>
                {list.map(item=>{
                    return <li key={item}> {item} </li>
                })}
            </div>
        </div>
    );

}

export default Test3;
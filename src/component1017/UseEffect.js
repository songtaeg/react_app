import React, { useEffect, useState } from 'react';

function UserEffect(props) {
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);

   useEffect(()=>{
    console.log("렌더링될때마다 항상 실행");
   });

   useEffect( ()=>{
        console.log("실행(최초 한번만 실행)");
    },[] );

    //렌더링(변경) -> 무조건 실행
    useEffect( ()=>{
        console.log("실행(최초한번+count1 변경될 때)");
    },[count1] );

    return (
        <div>
            <div>count1: {count1}</div>
            <div>count2: {count2}</div>
            
            <button onClick={()=>{setCount1(count1+1)}}>count1 증가</button>
            <button onClick={()=>{setCount2(count2+1)}}>count2 증가</button>
        </div>
    );
}

export default UserEffect;
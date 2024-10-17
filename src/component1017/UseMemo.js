import React, { useMemo, useState } from 'react';
function Funcnum(count){
    //5초
    for(var i=0; i<50000; i++){
        console.log(i);
    }

    return count*2;
}

function plusFunc(count){
    return count+1;
}

function UseMemo(props) {
    const [count,setCount] = useState(1);
    const [count2,setCount2] = useState(1);

    var num = useMemo( ()=>{
        return  Funcnum(count);
    },[count]);
    var num2 = plusFunc(count2);
    return (
        <div>
            {num}
            <button onClick={ ()=>{setCount(count+1)} }>증가</button>
            <hr/>

            {num2}
            <button onClick={ ()=>{setCount2(count2+1)} }>증가2</button>
        </div>
    );
}

export default UseMemo;
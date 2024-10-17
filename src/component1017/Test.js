
import React, { useEffect, useState } from 'react';

function Test(props) {
    const [count,setCount]=useState(0);
    const [flg,setFlg]=useState(false);

    useEffect( ()=>{
        let interval;
        if(flg){
            interval = setInterval(() => {
                setCount((prev)=>prev+1);
                //console.log("1초에 한 번씩 실행");
            }, 1000);
        }
        return ()=>{
            clearInterval(interval);
            //console.log("종료");
        };
    },[flg]);

    const start = ()=>{
        setFlg(true);
    }

    const stop = ()=>{
        setFlg(false);
    }

    const reset = ()=>{
        setCount(0);
        setFlg(false);
    }

    return (
        <div>
            <div> {count}초</div>
            <button onClick={start}>시작</button> 
            <button onClick={stop}>중지</button> 
            <button onClick={reset}>리셋</button> 
        </div>
    );
}

export default Test;
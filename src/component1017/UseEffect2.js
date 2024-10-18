import React, { useEffect, useState } from 'react';

function UserEffect2(props) {
    const [flg,setFlg]=useState(true);
    useEffect(()=>{
        //콜백,시간(ms)
        const interval = setInterval(() => {
            console.log("1초에 한 번씩 실행");
        }, 1000);
        return ()=>{
            clearInterval(interval);
            console.log("종료");
        }
    },[flg])

    return (
        <div>
            <div> 1초에 한번씩 실행 </div>
            <button onClick={()=>{
                setFlg(!flg);
            }}>클릭</button>
        </div>
    );
}

export default UserEffect2;
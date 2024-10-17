import React,{useRef, useState} from 'react';

function Review(props) {
    const [temp,setTemp]=useState(0);
    const refNum= useRef(10);
    let varNum=10;

    const varIncre=()=>{
        varNum++;
        console.log("varNum=>",varNum);
        console.log("refNum=>", refNum.current);
    }

    const refIncre=()=>{
        refNum.current++;
        console.log("varNum=>",varNum);
        console.log("refNum=>",refNum.current);
    }
    const tempFunc=()=>{
        setTemp(temp+1);
    }
    return (
        <div>
            <button onClick={tempFunc}>렌더링</button>
           <div>
                {varNum} 
                <button onClick={varIncre}>varNum</button>
            </div> 
            <div>
                {refNum.current} 
                <button onClick={refIncre}>refNum</button>
            </div>
        </div>
    );
}

export default Review;
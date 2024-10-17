import React, { useEffect, useRef } from 'react';

function Review2(props) {
    let searchRef= useRef();
    useEffect(()=>{
        console.log(searchRef);
        searchRef.current.focus();
    },[])
    const fnSearch = ()=>{
        alert(searchRef.current.value);
    }
    return (
        <div>
            <input ref={searchRef}></input>
            <button onClick={fnSearch}>검색</button>
        </div>
    );
}

export default Review2;
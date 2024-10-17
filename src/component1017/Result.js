import React from 'react';

function Result(props) {
    // 숫자 2개, 문자(연산자) 받아서 결과물 출력
    var result = <span>{Number(props.num) + Number(props.num2)}</span>
    return (
        <div>
            결과: {result} 
        </div>
    );
}

export default Result;
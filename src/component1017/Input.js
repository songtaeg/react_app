import React, { useState } from 'react';

function Input(props) {

    return (
        <div>
            <input placeholder='1번째 숫자'></input> <br></br>
            <input placeholder='2번째 숫자'></input> <br></br>
            <input placeholder='+,-,*,/'></input> <br></br>
            <button>계산</button>
        </div>
    );
}

export default Input;
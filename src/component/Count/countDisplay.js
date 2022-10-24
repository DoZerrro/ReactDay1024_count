import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {minus, plus} from "../../reducer/countSlice";

function CountDisplay() {

    const {count} = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {dispatch(plus())}}>PLUS</button>
            &nbsp;
            <button onClick={() => {dispatch(minus())}}>MINUS</button>
        </div>
    );
}

export default CountDisplay;
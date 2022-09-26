import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {decrement, increment, incrementByAmount, selectCount} from "../../features/counter/counterSlice";
import styles from "./EditCounter.module.scss"

const EditCounter = () => {
    const dispatch = useAppDispatch()
    const currentCount = useAppSelector(selectCount)
    const [value, setValue] = useState(0);
    return (
        <div className={styles.counterEdit}>
            <p>Increment by :
                <input name={'counter'} onChange={e=>setValue(Number.parseInt(e.target.value))} value={value} type={"number"}/>
                <button onClick={()=>dispatch(incrementByAmount(value))}>Increment By {value}</button>
            </p>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <p>Current counter value : {currentCount}</p>
        </div>
    );
};

export default EditCounter;
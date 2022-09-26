import React from 'react';
import { useAppSelector} from "../../hooks";
import { selectCount} from '../../features/counter/counterSlice'

const Counter = () => {
    const count = useAppSelector(selectCount)
    return (
        <div>
            Counter : {count}
        </div>
    );
};

export default Counter;
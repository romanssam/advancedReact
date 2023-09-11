import React, {useState} from 'react';
import styles from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Счетчик {count}</h1>
            <button className={styles.btn} onClick={increment}>Плюс</button>
            <button onClick={decrement}>Минус</button>
        </div>
    );
};

export default Counter;

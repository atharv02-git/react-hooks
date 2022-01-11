import React,{useState} from 'react'


function Increment() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    // note if you want to update the state based on its previous value always use prevState
    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}

export default Increment

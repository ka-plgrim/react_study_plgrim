import '../App.css';
import {useState} from "react";

function CompUseState() {

    const [count, setCount] = useState(1);

    const fnCountPlus = () => {
        setCount(count+1);
        document.getElementById("cnt").innerHTML = count;
    }

    const fnCountMinus = () => {
        setCount(count-1);
        document.getElementById("cnt").innerHTML = count;
    }

    return (
        <div className="App">
            <h1>ReactJS > UseState Example</h1>
            <p>index : <span id="cnt">{count}</span> <button onClick={fnCountPlus}>+</button> | <button onClick={fnCountMinus}>-</button></p>
        </div>
    );
}

export default CompUseState;

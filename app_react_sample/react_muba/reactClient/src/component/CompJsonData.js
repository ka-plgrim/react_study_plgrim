import '../App.css';
import {useState} from "react";

function CompJsonData() {

    const [players, setPlayers] = useState(
        [
            {name : "Lebron", age : 39},
            {name : "Harden", age : 35},
            {name : "Steph", age : 34}
        ]
    );

    return (
        <div className="App">
            <h1>ReactJS > Json Data Example</h1>
            <h3>NBA Player List from local variable</h3>
            <ul>
                {players.map((p) => {return <li key={p.name}>Name : {p.name}, Age : {p.age}</li>})}
            </ul>
        </div>
    );
}

export default CompJsonData;

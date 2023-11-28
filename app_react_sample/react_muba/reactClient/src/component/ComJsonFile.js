import '../App.css';
import {useState} from "react";
import players from "../files/Players.json";

function CompJsonFile() {

    return (
        <div className="App">
            <h1>ReactJS > Json File Example</h1>
            <h3>NBA Player List from file</h3>
            <ul>
                {players.map((p) => {return <li key={p.name}>Name : {p.name}, Age : {p.age}</li>})}
            </ul>
        </div>
    );
}

export default CompJsonFile;

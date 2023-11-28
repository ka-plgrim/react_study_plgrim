import '../App.css';
import {useState} from "react";

function CompTable() {

    let playerJson = [
        {"name" :  "Steph", "age" :  34},
        {"name" :  "Kuminga", "age" :  22},
        {"name" :  "Draimond", "age" :  33},
        {"name" :  "Thompson", "age" :  33},
        {"name" :  "Paul", "age" :  38}
    ]

    const [player, setPlayer] = useState(playerJson);
    const [name, setName] = useState("");
    const [age, setAge] = useState(20);
    const fnPlayerAdd = () => {
       let table = document.getElementById("tbPlayer");
       let rowCnt = table.rows.length;
       let newRow = table.insertRow(rowCnt);
       let c1 = newRow.insertCell(0);
       let c2 = newRow.insertCell(1);
       c1.innerHTML = name;
       c2.innerHTML = age;
    }

    return (
        <div className="App">
            <h1>ReactJS > Table Example</h1>
            <h3>NBA Player > Colden State Warriors</h3>
            <table id="tbPlayer">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                    {player.map((p) =>
                        (
                            <tr key={p.name}>
                                <td>{p.name}</td>
                                <td>{p.age}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            <form>
                <input type="text" placeholder="이름 입력해주세요" required="required" onChange={(event) => {setName(event.target.value)}}/><br/>
                <input type="text" placeholder="연령 입력해주세요" required="required" onChange={(event) => {setAge(event.target.value)}}/>
                <button type="button" onClick={fnPlayerAdd}>Add</button>
            </form>
        </div>
    );
}

export default CompTable;

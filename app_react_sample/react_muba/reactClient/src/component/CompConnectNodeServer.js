import '../App.css';
import React, {useEffect, useState} from "react";

function CompConnectNodeServer() {

    const[nbaPlayers, setNbaPlayers] = useState([]);
    const[pid,setPid] = useState('');
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const fnGetPlayerCnt = () => {
        let param = {'P1' : 0};
        fetch('http://localhost:3001/getPlayerCount', {
                method : "POST", body : JSON.stringify(param), headers : {'Content-Type':'application/json'}
            }
        )
        .then(response => response.json())
        .then((result) => {
            console.log('getPlayerCount');
            setPid(++result[0].CNT);
            }
        )
        .catch((err) => {
            console.log(err);
        });
    }
    const fnGetPlayers = () => {
        let param = {PID:'',NAME:'',AGE:''};
        param['NAME'] = name;
        console.log(param);
        fetch('http://localhost:3001/getPlayerList', {
            method : "POST", body : JSON.stringify(param), headers : {'Content-Type':'application/json'}
            }
        )
        .then(response => response.json())
        .then((result) => {
            console.log(result);
            setNbaPlayers(result);
            }
        )
        .catch((err) => {
            console.log(err);
        });
    }

    const fnInsertPlayers = () => {
        if(name === "" || age === ""){
           alert("이름 또는 연령 입력 해주세요.");
           return false;
        }
        let param = {NAME:'',AGE:''};
        param['NAME'] = name;
        param['AGE'] = age;
        console.log(param);
        fetch('http://localhost:3001/insertPlayer', {
                method : "POST", body : JSON.stringify(param), headers : {'Content-Type':'application/json'}
            }
        )
        .then(response => response.json())
        .then((result) => {
            setPid("");
            setName("");
            setAge("");
            document.getElementById("_txtName").value = "";
            document.getElementById("_txtAge").value = "";
            alert(result.affectedRows + " Player inserted!");
            }
        )
        .catch((err) => {
            console.log(err);
        });
    }

    const fnUpdatePlayers = () => {
        if(pid === "" || name === "" || age === ""){
            alert("선수 모든 정보 입력 해주세요.");
            return false;
        }
        let param = {PID:'',NAME:'',AGE:''};
        param['PID'] = pid;
        param['NAME'] = name;
        param['AGE'] = age;
        console.log(param);
        fetch('http://localhost:3001/updatePlayer', {
                method : "POST", body : JSON.stringify(param), headers : {'Content-Type':'application/json'}
            }
        )
        .then(response => response.json())
        .then((result) => {
            setPid("");
            setName("");
            setAge("");
            document.getElementById("_txtPid").value = "";
            document.getElementById("_txtName").value = "";
            document.getElementById("_txtAge").value = "";
            alert(result.affectedRows + " Player updated!");
            }
        )
        .catch((err) => {
            console.log(err);
        });
    }
    const fnDeletePlayer = () => {
        let _pid = document.getElementById("_txtPid").value.trim();
        if(_pid === ""){
            alert("삭제할 선수 ID 입력 해주세요.");
            return false;
        }
        let param = {PID:''};
        param['PID'] = pid;
        console.log(param);
        fetch('http://localhost:3001/deletePlayer', {
                method : "POST", body : JSON.stringify(param), headers : {'Content-Type':'application/json'}
            }
        )
        .then(response => response.json())
        .then((result) => {
            setPid("");
            document.getElementById("_txtPid").value = "";
            alert(result.affectedRows + " Player deleted!");
            }
        )
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        console.log("useEffect() ...");
    }, []);

    return (
        <div className="App">
            <h1>ReactJS > NodeJs Server Connection Example</h1>
            <h3>NBA Player List from MySQL DB</h3>
            <input type="text" id="txtName" placeholder="이름 입력 해주세요" onChange={(event) => {setName(event.target.value);}}/>
            <button onClick={(event) => {setName(""); document.getElementById("txtName").value = "";}}>Clear</button>
            <button onClick={fnGetPlayers}>Search Players</button>
            <label>Testing >>> {name}</label><br/>
            <ul>
                {
                    nbaPlayers.length === 0 && <li>No Result</li>
                }
                {
                    nbaPlayers.map((p) => {return <li key={p.PID}>No : {p.PID}, Name : {p.NAME}, Age : {p.AGE}</li>})
                }
            </ul>
            <input type="text" id="_txtPid" placeholder="ID 입력 해주세요" onChange={(event) => {setPid(event.target.value);}}/><br/>
            <input type="text" id="_txtName" placeholder="이름 입력 해주세요" onChange={(event) => {setName(event.target.value);}}/><br/>
            <input type="text" id="_txtAge" placeholder="연령 입력 해주세요" onChange={(event) => {setAge(event.target.value);}}/>
            <button onClick={fnInsertPlayers}>Insert Players</button>
            <button onClick={fnUpdatePlayers}>Update Players</button>
            <button onClick={fnDeletePlayer}>Delete Player</button><br/><br/>
        </div>
    );
}

export default CompConnectNodeServer;

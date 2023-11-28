import '../App.css';

function CompButton(props) {
    const fnc = () => {
        document.getElementById("msg").innerHTML = props.name + " " + props.msg;
    }
    const fncEmpty = () => {
        document.getElementById("msg").innerHTML = "The message is here ...";
    }

    return (
        <div className="App">
            <h1>ReactJS > Button Example</h1>
            <p id="msg">The message is here ...</p>
            <button onClick={fnc}>Show nba player</button>
            <button onClick={fncEmpty}>Hide nba player</button>
        </div>
    );
}

export default CompButton;

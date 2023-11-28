import './App.css';

function App() {

    function fnc(){
        document.getElementById("msg").innerHTML = "Clicked button ...";
    }

    return (
        <div className="App">
            <h1>Hello React JS</h1>
            <p id="msg">The message is here ...</p>
            <button onClick={fnc}>Show Message</button>
        </div>
    );
}

export default App;

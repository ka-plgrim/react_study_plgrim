const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const conn = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'root1234',
    database : 'db-react'
});

conn.connect((err) => {
    if(err)
        console.log("mysql connection error " + err);
    else
        console.log("mysql is connected successfully!");
});

app.post('/getPlayerCount', (req, res) => {
    conn.query("SELECT COUNT(*) AS CNT FROM PLAYER WHERE 1 = 1",(err,data) => {
        res.send(data);
    });
});

app.post('/getPlayerList', (req, res) => {
    let name = req.body.NAME;
    let sql = "SELECT * FROM PLAYER WHERE 1 = 1";
    if(name != '' && name != null){
        //sql += " AND NAME = " + mysql.escape(name);
        sql += " AND NAME LIKE " + conn.escape('%' + name + '%');
        conn.query(sql,(err,data) => {
            res.send(data);
        });
    } else{
        conn.query(sql,(err,data) => {
            res.send(data);
        });
    }
});
app.post('/insertPlayer', (req, res) => {
    let name = req.body.NAME;
    let age = req.body.AGE;
    conn.query("INSERT INTO PLAYER(PID, NAME, AGE) VALUES((SELECT T.MAX_PID FROM (SELECT IFNULL(MAX(PID)+1,1) AS MAX_PID FROM PLAYER) AS T),?,?)",[name,age],(err,data) => {
        res.send(data);
    });
});
app.post('/updatePlayer', (req, res) => {
    let pid = req.body.PID;
    let name = req.body.NAME;
    let age = req.body.AGE;
    conn.query("UPDATE PLAYER SET NAME=?, AGE=? WHERE PID=?",[name,age,pid],(err,data) => {
        res.send(data);
    });
});
app.post('/deletePlayer', (req, res) => {
    let pid = req.body.PID;
    conn.query("DELETE FROM PLAYER WHERE PID=?",[pid],(err,data) => {
        res.send(data);
    });
});

app.listen(port, () => {
    console.log("Server is executing!");
});
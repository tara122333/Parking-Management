const fs = require("fs");
const express = require("express");
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tara1181@"
});
db.connect(function(err){
    if (err) throw err;
    console.log("MySql Connected!");
});

app.get('/creatdb',(req,res)=>{
    let sql = "CREATE DATABASE mydb";
    db.query(sql, function (err, result){
      if (err) throw err;
      console.log(result);
      res.send("Data Base Created ....");
    });
});

app.listen("80",()=>{
    console.log("Server Has been started...on port 80!!");
});
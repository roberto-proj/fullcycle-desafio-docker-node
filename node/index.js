const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) VALUES ('nova pessoa')`
connection.query(sql)

app.get('/', (req,res) => {
    connection.query(`SELECT * FROM people`, function (err, result, fields) {
        res.send('<h1>Full Cycle Rocks!</h1>'+'<ul>'+result.map(a => {
            return `<li>id: ${a.id} nome: ${a.name}</li>`;
        })+'</ul>')
    })
    connection.end()
})

app.listen(port, ()=> {
    console.log("Rodando na porta "+port)
})
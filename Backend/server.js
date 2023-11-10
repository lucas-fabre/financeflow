const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'financeflow',
    port: 3306,
})

app.get ('/', (req, res) => {
    res.send('Hello World')
})

app.get('/transactions', (req, res) => {
    const sql = "SELECT * from transactions"
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(data)
        }
    })
})

app.get('/solde', (req, res) => {
    const sql = "SELECT * from solde"
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(data)
        }
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
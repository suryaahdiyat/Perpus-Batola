import express from "express"
import mysql from "mysql2"
import cors from 'cors'

const port = 3030
const app = express()
app.use(express.json())
app.use(cors())

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_perpustakaan"
})


app.get("/buku", (req, res) => {
    const q = "SELECT * FROM buku order by id_buku desc"
    con.query(q, (err, result) =>{
        if(err) return res.json(err)
        return res.json(result)
    })
})//berhasil

app.get("/buku/:id", (req, res) => {
    const q = "SELECT * FROM buku WHERE id_buku = ?"
    con.query(q, [req.params.id], (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
})

app.post("/buku", (req, res) => {
    const q = "INSERT INTO buku(`judul`, `tahun`, `pengarang`) VALUES(?)"
    const values = [req.body.judul, req.body.tahun, req.body.pengarang]
    // console.log(values)
    con.query(q, [values], (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
})//berhasil

app.delete("/buku/:id", (req, res)=> {
    const idBuku = req.params.id
    const q = "DELETE FROM buku WHERE id_buku = ?"
    con.query(q, [idBuku], (err, result)=>{
        if(err) return res.json(err)
        return res.json(result)
})
})//berhasil

app.put("/buku/:id", (req, res)=> {
    const idBuku = req.params.id
    const values = [req.body.judul, req.body.tahun, req.body.pengarang]
    const q = "UPDATE buku SET `judul`= ?, `tahun`= ? , `pengarang` = ? WHERE id_buku = ?"
    con.query(q, [...values, idBuku], (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
})
})//berhasil

app.get("/buku-count", (req, res) =>{
    const q = "SELECT COUNT(*) as jumlah_buku FROM buku;"
    con.query(q, (err, result) => {
        if(err) return res.json(err)
        return res.json(result[0])
    })
})

//user

app.get("/user/:name/:email", (req, res)=>{
    // const user = [req.body.nama, req.body.email]
    // const q = "SELECT * FROM users WHERE name = ? AND email = ?"
    const q = "SELECT role.role_name, users.id_user FROM users INNER JOIN role WHERE users.id_role = role.id_role AND users.name = ? AND users.email = ?"
    con.query(q, [req.params.name, req.params.email], (err, result) => {
        if(err) return res.json(err)
        return res.json(result[0])
    })
})//for login

app.get("/users", (req, res)=>{
    const q = "SELECT * FROM users"
    con.query(q, (error, result) => {
        if(error) return res.json(error)
        return res.json(result)
    })
})//berhasil

app.post("/users", (req, res) => {
    const q = "INSERT INTO users(`name`, `email`, `id_role`) values(?)"
    const newUser = [req.body.name, req.body.email, "B"]
    con.query(q, [newUser], (err, result)=> {
        if(err) return res.json(err)
        return res.json(result)
    })
})//berhasil

app.delete("/users/:id", (req, res) => {
    const idUser = req.params.id
    const q = "DELETE FROM users WHERE id_user = ?"
    con.query(q, [idUser], (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
})//berhasil

app.put("/users/:id", (req, res)=> {
    const idUser = req.params.id
    const q = "UPDATE users SET `name` = ?, `email` = ? WHERE id_user = ?"
    con.query(q, [req.body.name, req.body.email, idUser], (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
})//berhasil

app.get("/users/:id", (req, res) => {
    const id_user = req.params.id
    const q = "SELECT * FROM users WHERE id_user = ?"
    con.query(q, [id_user], (err, result) => {
        if(err) return res.json(err)
        return res.json(result)
    })
})

app.get("/users-count", (req, res) =>{
    const q = "SELECT COUNT(*) as jumlah_users FROM users;"
    con.query(q, (err, result) => {
        if(err) return res.json(err)
        return res.json(result[0])
    })
})


app.listen(port, ()=> console.log(`App Running At ${port}`))
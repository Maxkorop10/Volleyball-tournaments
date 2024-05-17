const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
const router = require('./routes/routers')

app.use(cors())
app.use(express.json())
app.use(router)

app.get("/", async (req, res) => {
    res.status(200).json({message: 'Server is working!'})
})

app.listen(2000, () => {
    console.log("Server has started on port 2000")
})
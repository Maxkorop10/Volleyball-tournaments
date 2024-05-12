const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: "maxkorop10",
    host: "localhost",
    port: "5432",
    database: "Volleyball_tournaments"
})

module.exports = pool

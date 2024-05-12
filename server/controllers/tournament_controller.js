const pool = require("../db")

const getTournament = async (req, res) => {
    try {
        const tournament = await pool.query("Select * from Tournament")
        res.json(tournament.rows)
    } catch (error) {
        console.log(error)
    }
}

const postTournament = async (req, res) => {
    try {
        const { tournament_name, location, start_date, end_date } = req.body
        const new_tournament = await pool.query(
            `Insert into Tournament (tournament_name, location, start_date, end_date) values ('${tournament_name}', '${location}', '${start_date}', '${end_date}')`
        )
        res.json(new_tournament)
    } catch (error) {
        console.log(error)
    }
}

const upd_Tournament = async (req, res) => {
    try {
        const { tournament_name, location, start_date, end_date, id } = req.body
        const put_tournament = await pool.query(
            `Update Tournament set tournament_name = '${tournament_name}', location = '${location}', start_date = '${start_date}', end_date = '${end_date}' where tournament_id = '${id}'`
        )
        res.json(put_tournament)
    } catch (error) {
        console.log(error)
    }
}

const del_Tournament = async (req, res) => {
    try {
        const {tournament_id} = req.query
        const delete_tournament = await pool.query(
            `Delete from Tournament where tournament_id = '${tournament_id}'`
        )
        res.json(delete_tournament)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTournament,
    postTournament,
    upd_Tournament,
    del_Tournament
}

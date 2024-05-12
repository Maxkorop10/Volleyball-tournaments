const pool = require("../db")

const getPlayers = async (req, res) => {
    try {
        const players = await pool.query("Select * from Player")
        res.json(players.rows)
    } catch (error) {
        console.log(error)
    }
}

const postPlayer = async (req, res) => {
    try {
        const { first_name, last_name, team_id, position, date_of_birth } = req.body
        const new_player = await pool.query(
            `Insert into Player (first_name, last_name, team_id, position, date_of_birth) values ('${first_name}', '${last_name}', '${team_id}', '${position}', '${date_of_birth}')`
        )
        res.json(new_player)
    } catch (error) {
        console.log(error)
    }
}

const upd_Player = async (req, res) => {
    try {
        const {first_name, last_name, position, id} = req.body
        console.log(req.body)
        const upd_player = await pool.query(
            `Update Player set first_name = '${first_name}', last_name = '${last_name}', position = '${position}' where player_id = '${id}'`
        )
        res.json(upd_player)
    } catch (error) {
        console.log(error)
    }
}

const del_Player = async (req, res) => {
    try {
        const {player_id, first_name, last_name} = req.query
        const delete_player = await pool.query(
            `Delete from Player where player_id = '${player_id}'`
        )
        res.json(delete_player)
    } catch (error) {
        console.log(error)
    }
}

const getPlayerInfo = async (req, res) => {
    try {
        const playersWithTeams = await pool.query(
            `SELECT Player.player_id, Player.first_name, Player.last_name, Player.position, Player.date_of_birth,
             Team.team_id, Team.team_name, Team.country 
             FROM Player 
             INNER JOIN Team ON Player.team_id = Team.team_id`
        )
        res.json(playersWithTeams.rows);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getPlayers,
    postPlayer,
    upd_Player,
    del_Player,
    getPlayerInfo
}

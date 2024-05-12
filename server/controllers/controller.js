const pool = require("../db")

const getTeams = async (req, res) => {
    try {
        const teams = await pool.query("Select * from Team")
        res.json(teams.rows)
    } catch (error) {
        console.log(error)
    }
}

const postTeam = async (req, res) => {
    try {
        const { team_name, country, master, rating } = req.body
        const newteam = await pool.query(
            `Insert into Team (team_name, country, master, rating) values ('${team_name}', '${country}', '${master}', '${rating}')`
        )
        res.json(newteam)
    } catch (error) {
        console.log(error)
    }
}

const upd_Team = async (req, res) => {
    try {
        const {team_name, country, master, rating, id} = req.body
        console.log(req.body)
        const put_team = await pool.query(
            `Update Team set team_name = '${team_name}', country = '${country}', master = '${master}', rating = '${rating}' where team_id = '${id}'`
        )
        res.json(put_team)
    } catch (error) {
        console.log(error)
    }
}

const del_Team = async (req, res) => {
    try {
        const {team_id} = req.query
        const delete_team = await pool.query(
            `Delete from Team where team_id = '${team_id}'`
        )
        res.json(delete_team)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const searchTeam = async (req, res) => {
    try {
        const { query } = req.params
        const teams = await pool.query("SELECT * FROM Team WHERE team_name ILIKE $1", [`${query}%`])
        res.json(teams.rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}


module.exports = {
    getTeams,
    postTeam,
    upd_Team,
    del_Team,
    searchTeam
}

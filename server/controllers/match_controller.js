const pool = require("../db")

const getMatch = async (req, res) => {
    try {
        const match = await pool.query("Select * from Match")
        res.json(match.rows)
    } catch (error) {
        console.log(error)
    }
}

const postMatch = async (req, res) => {
    try {
        const { tournament_id, first_team_id, second_team_id, start_datetime, first_team_score, second_team_score } = req.body
        const new_match = await pool.query(
            `Insert into Match (tournament_id, first_team_id, second_team_id, start_datetime, first_team_score, second_team_score) 
            values ('${tournament_id}', '${first_team_id}', '${second_team_id}', '${start_datetime}', '${first_team_score}', '${second_team_score}')`
        )
        res.json(new_match)
    } catch (error) {
        console.log(error)
    }
}

const upd_Match = async (req, res) => {
    try {
        const {start_datetime, first_team_score, second_team_score, id} = req.body
        console.log(req.body)
        const put_match = await pool.query(
            `Update Match set start_datetime = '${start_datetime}', first_team_score = '${first_team_score}', 
            second_team_score = '${second_team_score}' where match_id = '${id}'`
        )
        res.json(put_match)
    } catch (error) {
        console.log(error)
    }
}

const del_Match = async (req, res) => {
    try {
        const {match_id} = req.query
        const delete_match = await pool.query(
            `Delete from Match where match_id = '${match_id}'`
        )
        res.json(delete_match)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getMatch,
    postMatch,
    upd_Match,
    del_Match
}

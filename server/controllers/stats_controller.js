const pool = require("../db")

const getStats = async (req, res) => {
    try {
        const stats = await pool.query("Select * from TeamStats")
        res.json(stats.rows)
    } catch (error) {
        console.log(error)
    }
}

const postStats = async (req, res) => {
    try {
        const { team_id, tournament_id, points, attacks, blocks, assists, serves, receptions, errors } = req.body
        const new_stats = await pool.query(
            `Insert into TeamStats (team_id, tournament_id, points, attacks, blocks, assists, serves, receptions, errors) 
            values ('${team_id}', '${tournament_id}', '${points}', '${attacks}', '${blocks}', '${assists}', '${serves}', '${receptions}', '${errors}')`
        )
        res.json(new_stats)
    } catch (error) {
        console.log(error)
    }
}

const upd_Stats = async (req, res) => {
    try {
        const {points, attacks, blocks, assists, serves, receptions, errors, id} = req.body
        const put_stats = await pool.query(
            `Update TeamStats set points = '${points}', attacks = '${attacks}', blocks = '${blocks}', assists = '${assists}', serves = '${serves}', receptions = '${receptions}', errors = '${errors}'
             where stats_id = '${id}'`
        )
        res.json(put_stats)
    } catch (error) {
        console.log(error)
    }
}

const del_Stats = async (req, res) => {
    try {
        const {stats_id} = req.query
        const delete_stats = await pool.query(
            `Delete from TeamStats where stats_id = '${stats_id}'`
        )
        res.json(delete_stats)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getStats,
    postStats,
    upd_Stats,
    del_Stats
}

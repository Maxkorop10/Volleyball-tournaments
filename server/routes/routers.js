const Router = require('express')
const router = new Router()
const controller = require('../controllers/controller')
const player_controller = require('../controllers/player_controller')
const tournament_controller = require('../controllers/tournament_controller')
const match_controller = require('../controllers/match_controller')
const stats_controller = require('../controllers/stats_controller')

router.get("/teams", controller.getTeams)
router.post("/teams", controller.postTeam)
router.put("/teams", controller.upd_Team)
router.delete("/teams", controller.del_Team)
router.get("/teams/search/:query", controller.searchTeam)

router.get("/players", player_controller.getPlayers)
router.post("/players", player_controller.postPlayer)
router.put("/players", player_controller.upd_Player)
router.delete("/players", player_controller.del_Player)
router.get("/player_info", player_controller.getPlayerInfo);

router.get("/tournaments", tournament_controller.getTournament)
router.post("/tournaments", tournament_controller.postTournament)
router.put("/tournaments", tournament_controller.upd_Tournament)
router.delete("/tournaments", tournament_controller.del_Tournament)

router.get("/match", match_controller.getMatch)
router.post("/match", match_controller.postMatch)
router.put("/match", match_controller.upd_Match)
router.delete("/match", match_controller.del_Match)

router.get("/stats", stats_controller.getStats)
router.post("/stats", stats_controller.postStats)
router.put("/stats", stats_controller.upd_Stats)
router.delete("/stats", stats_controller.del_Stats)

module.exports = router

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Stats = () => {
    const [stat, setStat] = useState([])
    const [newStat, setNewStat] = useState({
        team_id: '',
        tournament_id: '',
        points: '',
        attacks: '',
        blocks: '',
        assists: '',
        serves: '',
        receptions: '',
        errors: ''
    })

    const [teams, setTeams] = useState([])
    const [tournaments, setTournaments] = useState([])

    useEffect(() => {
        fetchStats()
        fetchTeams()
        fetchTournaments()
    }, [])

    const fetchStats = async () => {
        try {
            const response = await axios.get('http://localhost:5000/stats');
            setStat(response.data)
        } catch (error) {
            console.error('Error fetching stats:', error)
        }
    }

    const fetchTeams = async () => {
        try {
            const response = await axios.get('http://localhost:5000/teams')
            setTeams(response.data)
        } catch (error) {
            console.error('Error fetching teams:', error)
        }
    }

    const fetchTournaments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tournaments')
            setTournaments(response.data)
        } catch (error) {
            console.error('Error fetching tournaments:', error)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewStat({ ...newStat, [name]: value })
    }

    const handleAddStat = async () => {
        try {
            await axios.post('http://localhost:5000/stats', newStat)
            fetchStats();
            setNewStat({
                team_id: '',
                tournament_id: '',
                points: '',
                attacks: '',
                blocks: '',
                assists: '',
                serves: '',
                receptions: '',
                errors: ''
            })
        } catch (error) {
            console.error('Error adding stat:', error)
        }
    }

    const handleDeleteStat = async (statId) => {
        try {
          await axios.delete(`http://localhost:5000/stats?stats_id=${statId}`)
          fetchStats()
        } catch (error) {
          console.error('Error deleting stat:', error)
        }
    }

    const getTeamNameById = (teamId) => {
        const team = teams.find(team => team.team_id === teamId);
        return team ? team.team_name : '';
    }

    const getTournamentNameById = (tournamentId) => {
        const tournament = tournaments.find(tournament => tournament.tournament_id === tournamentId);
        return tournament ? tournament.tournament_name : '';
    }

    return (
        <>
            <h1 className='mt-[40px] mb-[20px] font-bold'>Stats</h1>

            <div className='mb-[15px] flex flex-row'>

                <select
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="team_id"
                    value={newStat.team_id}
                    onChange={handleInputChange}
                >
                    <option value="">Select Team</option>
                    {teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>

                <select
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="tournament_id"
                    value={newStat.tournament_id}
                    onChange={handleInputChange}
                >
                    <option value="">Select Tournament</option>
                    {tournaments.map((tournament) => (
                        <option key={tournament.tournament_id} value={tournament.tournament_id}>
                            {tournament.tournament_name}
                        </option>
                    ))}
                </select>

                <input
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="points"
                    value={newStat.points}
                    onChange={handleInputChange}
                    placeholder="Points"
                />

                <input
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="attacks"
                    value={newStat.attacks}
                    onChange={handleInputChange}
                    placeholder="Attacks"
                />

                <input
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="blocks"
                    value={newStat.blocks}
                    onChange={handleInputChange}
                    placeholder="Blocks"
                />

                <input
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="assists"
                    value={newStat.assists}
                    onChange={handleInputChange}
                    placeholder="Assists"
                />

                <input
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="serves"
                    value={newStat.serves}
                    onChange={handleInputChange}
                    placeholder="Serves"
                />

                <input
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="receptions"
                    value={newStat.receptions}
                    onChange={handleInputChange}
                    placeholder="Reception"
                />

                <input
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="errors"
                    value={newStat.errors}
                    onChange={handleInputChange}
                    placeholder="Errors"
                />

                <button
                    className='rounded-[4px] bg-[rgba(39,_157,_245,_0.8)] text-[#fff] px-[15px] py-[2px] text-[14px] border-[none] cursor-pointer ml-[14px]'
                    onClick={handleAddStat}
                >
                    Add
                </button>
            </div>

            <table className='w-full border-collapse p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
                <thead>
                    <tr>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>ID</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Team</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Tournament</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Points</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Attacks</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Blocks</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Assists</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Serves</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Reseptions</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Errors</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stat.map((stat) => (
                        <tr key={stat.stats_id}>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{stat.stats_id}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{getTeamNameById(stat.team_id)}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{getTournamentNameById(stat.tournament_id)}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{stat.points}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{stat.attacks}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{stat.blocks}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{stat.assists}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{stat.serves}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{stat.receptions}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{stat.errors}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
                            <Link to={`/edit_stats/${stat.stats_id}`}>
                                <button className='px-[10px] py-[6px] rounded-[4px] bg-[rgba(39,_208,_89,_0.8)] text-[#fff] border-[none] cursor-pointer'>Edit</button>
                            </Link>
                            <button className='ml-[5px] px-[10px] py-[6px] rounded-[4px] bg-[#dc3545] text-[#fff] border-[none] cursor-pointer' onClick={() => handleDeleteStat(stat.stats_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Stats
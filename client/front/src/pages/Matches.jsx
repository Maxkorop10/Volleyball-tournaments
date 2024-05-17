import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Matches = () => {
    const [matches, setMatches] = useState([])
    const [newMatch, setNewMatch] = useState({
        tournament_id: '',
        first_team_id: '',
        second_team_id: '',
        start_datetime: '',
        first_team_score: '',
        second_team_score: ''
    })

    const [teams, setTeams] = useState([])
    const [tournaments, setTournaments] = useState([])

    useEffect(() => {
        fetchMatches()
        fetchTeams()
        fetchTournaments()
    }, [])

    const fetchMatches = async () => {
        try {
            const response = await axios.get('http://localhost:2000/match');
            setMatches(response.data)
        } catch (error) {
            console.error('Error fetching matches:', error)
        }
    }

    const fetchTeams = async () => {
        try {
            const response = await axios.get('http://localhost:2000/teams')
            setTeams(response.data)
        } catch (error) {
            console.error('Error fetching teams:', error)
        }
    }

    const fetchTournaments = async () => {
        try {
            const response = await axios.get('http://localhost:2000/tournaments')
            setTournaments(response.data)
        } catch (error) {
            console.error('Error fetching tournaments:', error)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewMatch({ ...newMatch, [name]: value })
    }

    const handleAddMatch = async () => {
        try {
            await axios.post('http://localhost:2000/match', newMatch)
            fetchMatches()
            setNewMatch({
                tournament_id: '',
                first_team_id: '',
                second_team_id: '',
                start_datetime: '',
                first_team_score: '',
                second_team_score: ''
            })
        } catch (error) {
            console.error('Error adding match:', error)
        }
    }

    const handleDeleteMatch = async (matchId) => {
        try {
          await axios.delete(`http://localhost:2000/match?match_id=${matchId}`)
          fetchMatches()
        } catch (error) {
          console.error('Error deleting match:', error)
        }
    }

    const getTeamNameById = (teamId) => {
        const team = teams.find(team => team.team_id === teamId)
        return team ? team.team_name : ''
    }

    return (
        <>
            <h1 className='mt-[20px] mb-[20px] font-bold'>Matches</h1>

            <div className='mb-[15px] flex flex-row relative'>
                <select
                    className='w-[165px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="tournament_id"
                    value={newMatch.tournament_id}
                    onChange={handleInputChange}>

                    <option value="">Select Tournament</option>
                    {tournaments.map((tournament) => (
                        <option key={tournament.tournament_id} value={tournament.tournament_id}>
                            {tournament.tournament_name}
                        </option>
                    ))}
                </select>

                <select
                    className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="first_team_id"
                    value={newMatch.first_team_id}
                    onChange={handleInputChange}>

                    <option value="">Select First Team</option>
                    {teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>

                <select
                    className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="second_team_id"
                    value={newMatch.second_team_id}
                    onChange={handleInputChange}>

                    <option value="">Select Second Team</option>
                    {teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>

                <input
                    className='w-[125px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="date"
                    name="start_datetime"
                    value={newMatch.start_datetime}
                    onChange={handleInputChange}
                    placeholder="Start Date"
                />

                <input
                    className='w-[110px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="first_team_score"
                    value={newMatch.first_team_score}
                    onChange={handleInputChange}
                    placeholder="First Team Score"
                />

                <input
                    className='w-[110px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="second_team_score"
                    value={newMatch.second_team_score}
                    onChange={handleInputChange}
                    placeholder="Second Team Score"
                />

                <button
                    className='rounded-[4px] bg-[rgba(39,_157,_245,_0.8)] text-[#fff] px-[15px] py-[2px] text-[14px] border-[none] cursor-pointer ml-[14px]'
                    onClick={handleAddMatch}
                >
                    Add
                </button>
            </div>

            <table className='w-full border-collapse p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
                <thead>
                    <tr>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>ID</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Tournament</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>First Team</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Second Team</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Start Date</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>First Team Score</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Second Team Score</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match) => (
                        <tr key={match.match_id}>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{match.match_id}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{match.tournament_id}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{getTeamNameById(match.first_team_id)}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{getTeamNameById(match.second_team_id)}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{new Date(match.start_datetime).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{match.first_team_score}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{match.second_team_score}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
                            <Link to={`/edit_match/${match.match_id}`}>
                                <button className='px-[10px] py-[6px] rounded-[4px] bg-[rgba(39,_208,_89,_0.8)] text-[#fff] border-[none] cursor-pointer'>Edit</button>
                            </Link>
                            <button className='ml-[5px] px-[10px] py-[6px] rounded-[4px] bg-[#dc3545] text-[#fff] border-[none] cursor-pointer' onClick={() => handleDeleteMatch(match.match_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Matches
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Tournaments = () => {
    const [tournament, setTournament] = useState([])
    const [newTournament, setNewTournament] = useState({
        tournament_name: '',
        first_team_id: '',
        second_team_id: '',
        third_team_id: '',
        fourth_team_id: '',
        location: '',
        start_date: '',
        end_date: ''
    })

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetchTournaments()
        fetchTeams()
    }, [])

    const fetchTournaments = async () => {
        try {
            const response = await axios.get('http://localhost:2000/tournaments')
            setTournament(response.data)
        } catch (error) {
            console.error('Error fetching tournaments:', error)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewTournament({ ...newTournament, [name]: value })
    }

    const fetchTeams = async () => {
        try {
            const response = await axios.get('http://localhost:2000/teams')
            setTeams(response.data)
        } catch (error) {
            console.error('Error fetching teams:', error)
        }
    }

    const handleAddTournament = async () => {
        try {
            await axios.post('http://localhost:2000/tournaments', newTournament)
            fetchTournaments();
            setNewTournament({
                tournament_name: '',
                first_team_id: '',
                second_team_id: '',
                third_team_id: '',
                fourth_team_id: '',
                location: '',
                start_date: '',
                end_date: ''
            })
        } catch (error) {
            console.error('Error adding tournament:', error)
        }
    }

    const handleDeleteTournament = async (tournamentId) => {
        try {
          await axios.delete(`http://localhost:2000/tournaments?tournament_id=${tournamentId}`)
          fetchTournaments()
        } catch (error) {
          console.error('Error deleting tournament:', error)
        }
    }

    const getTeamNameById = (teamId) => {
        const team = teams.find(team => team.team_id === teamId)
        return team ? team.team_name : ''
    }

    return (
        <>
            <h1 className='mt-[10px] mb-[20px] font-bold'>Tournaments</h1>

            <div className='mb-[15px] relative flex flex-row'>
                <input
                    className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="tournament_name"
                    value={newTournament.tournament_name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />

                <select
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="first_team_id"
                    value={newTournament.first_team_id}
                    onChange={handleInputChange}>

                    <option value="">1st Team</option>
                    {teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>

                <select
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="second_team_id"
                    value={newTournament.second_team_id}
                    onChange={handleInputChange}>

                    <option value="">2nd Team</option>
                    {teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>

                <select
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="third_team_id"
                    value={newTournament.third_team_id}
                    onChange={handleInputChange}>

                    <option value="">3rd Team</option>
                    {teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>

                <select
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="fourth_team_id"
                    value={newTournament.fourth_team_id}
                    onChange={handleInputChange}>

                    <option value="">4th Team</option>
                    {teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>

                <input
                    className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="location"
                    value={newTournament.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                />

                <input
                    className='w-[110px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="date"
                    name="start_date"
                    value={newTournament.start_date}
                    onChange={handleInputChange}
                    placeholder="Start"
                />

                <input
                    className='w-[110px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="date"
                    name="end_date"
                    value={newTournament.end_date}
                    onChange={handleInputChange}
                    placeholder="End"
                />

                <button
                    className='rounded-[4px] bg-[rgba(39,_157,_245,_0.8)] text-[#fff] px-[15px] py-[2px] text-[14px] border-[none] cursor-pointer ml-[14px]'
                    onClick={handleAddTournament}
                >
                    Add
                </button>
            </div>

            <table className='w-full border-collapse p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
                <thead>
                    <tr>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>ID</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Tournament Name</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Teams</th> {/* New column */}
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Location</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Start date</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>End date</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tournament.map((tournament) => (
                        <tr key={tournament.tournament_id}>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{tournament.tournament_id}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{tournament.tournament_name}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{`${getTeamNameById(tournament.first_team_id)}, ${getTeamNameById(tournament.second_team_id)}, ${getTeamNameById(tournament.third_team_id)}, ${getTeamNameById(tournament.fourth_team_id)}`}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{tournament.location}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{new Date(tournament.start_date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{new Date(tournament.end_date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
                                <Link to={`/edit_tournament/${tournament.tournament_id}`}>
                                    <button className='px-[10px] py-[6px] rounded-[4px] bg-[rgba(39,_208,_89,_0.8)] text-[#fff] border-[none] cursor-pointer'>Edit</button>
                                </Link>
                                <button className='ml-[5px] px-[10px] py-[6px] rounded-[4px] bg-[#dc3545] text-[#fff] border-[none] cursor-pointer' onClick={() => handleDeleteTournament(tournament.tournament_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Tournaments
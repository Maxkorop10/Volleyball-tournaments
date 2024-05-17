import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Players = () => {
    const [player, setPlayer] = useState([])
    const [newPlayer, setNewPlayer] = useState({
        first_name: '',
        last_name: '',
        team_id: '',
        position: '',
        date_of_birth: ''
    })
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetchPlayers()
        fetchTeams()
    }, [])

    const fetchPlayers = async () => {
        try {
            const response = await axios.get('http://localhost:2000/players');
            setPlayer(response.data)
        } catch (error) {
            console.error('Error fetching players:', error)
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

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewPlayer({ ...newPlayer, [name]: value })
    }

    const handleAddPlayer = async () => {
        try {
            await axios.post('http://localhost:2000/players', newPlayer)
            fetchPlayers();
            setNewPlayer({
                first_name: '',
                last_name: '',
                team_id: '',
                position: '',
                date_of_birth: ''
            })
        } catch (error) {
            console.error('Error adding player:', error)
        }
    }

    const positionOptions = [
        { value: "Libero", label: "Libero" },
        { value: "Middle Blocker", label: "Middle Blocker" },
        { value: "Outside Hitter", label: "Outside Hitter" },
        { value: "Opposite Hitter", label: "Opposite Hitter" }
    ]

    const handleDeletePlayer = async (playerId) => {
        try {
          await axios.delete(`http://localhost:2000/players?player_id=${playerId}`)
          fetchPlayers()
        } catch (error) {
          console.error('Error deleting player:', error)
        }
    }

    const [playerInfo, setPlayerInfo] = useState([])

    const GetInfo = async () => {
        try {
            const response = await axios.get('http://localhost:2000/player_info')
            setPlayerInfo(response.data)
        } catch (error) {
            console.error('Error fetching info:', error)
        }
    }

    return (
        <>
            <h1 className='mt-[40px] mb-[20px] font-bold'>Players</h1>

            <div className='mb-[15px] relative flex flex-row'>
                <input
                    className='w-[130px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="first_name"
                    value={newPlayer.first_name}
                    onChange={handleInputChange}
                    placeholder="First Name"
                />

                <input
                    className='w-[130px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="last_name"
                    value={newPlayer.last_name}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                />

                <select
                    className='w-[130px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="team_id"
                    value={newPlayer.team_id}
                    onChange={handleInputChange}>

                    <option value="">Select Team</option>
                    {teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.team_name}
                        </option>
                    ))}
                </select>

                <select
                    className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    name="position"
                    value={newPlayer.position}
                    onChange={handleInputChange}>

                    <option value="">Select Position</option>
                    {positionOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <input
                    className='w-[120px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="date"
                    name="date_of_birth"
                    value={newPlayer.date_of_birth}
                    onChange={handleInputChange}
                    placeholder="Date of Birth"
                />

                <button
                    className='rounded-[4px] bg-[rgba(39,_157,_245,_0.8)] text-[#fff] px-[15px] py-[2px] text-[14px] border-[none] cursor-pointer ml-[14px]'
                    onClick={handleAddPlayer}
                >
                    Add
                </button>
            </div>

            <table className='w-full border-collapse p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
                <thead>
                    <tr>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Player ID</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>First Name</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Last Name</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Team ID</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Position</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Date of Birth</th>
                        <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {player.map((player) => (
                        <tr key={player.player_id}>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{player.player_id}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{player.first_name}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{player.last_name}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{player.team_id}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{player.position}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{new Date(player.date_of_birth).toLocaleDateString("en-US", {
                                                                                                                    year: "numeric",
                                                                                                                    month: "long",
                                                                                                                    day: "numeric",
                                                                                                            })}</td>
                            <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
                            <Link to={`/edit_player/${player.player_id}`}>
                                <button className='px-[10px] py-[6px] rounded-[4px] bg-[rgba(39,_208,_89,_0.8)] text-[#fff] border-[none] cursor-pointer'>Edit</button>
                            </Link>
                            <button className='ml-[5px] px-[10px] py-[6px] rounded-[4px] bg-[#dc3545] text-[#fff] border-[none] cursor-pointer' onClick={() => handleDeletePlayer(player.player_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <h1 className='mt-[20px] text-lg mb-[10px] font-bold'>Players with Teams</h1>
                <button className='w-[125px] text-sm mb-[10px]'
                     onClick={GetInfo}>Get more info</button>
                <ul>
                    {playerInfo.map(player => (
                        <li className='mb-[2px]' key={player.player_id}>
                            {player.first_name} {player.last_name} - {player.country}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Players
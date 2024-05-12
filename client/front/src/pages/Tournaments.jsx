import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Tournaments = () => {
    const [tournament, setTournament] = useState([])
    const [newTournament, setNewTournament] = useState({
        tournament_name: '',
        location: '',
        start_date: '',
        end_date: ''
    })

    useEffect(() => {
        fetchTournaments()
    }, [])

    const fetchTournaments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tournaments');
            setTournament(response.data)
        } catch (error) {
            console.error('Error fetching tournaments:', error)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewTournament({ ...newTournament, [name]: value })
    }

    const handleAddTournament = async () => {
        try {
            await axios.post('http://localhost:5000/tournaments', newTournament)
            fetchTournaments();
            setNewTournament({
                tournament_name: '',
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
          await axios.delete(`http://localhost:5000/tournaments?tournament_id=${tournamentId}`)
          fetchTournaments()
        } catch (error) {
          console.error('Error deleting tournament:', error)
        }
    }

    return (
        <>
            <h1 className='mt-[-50px] mb-[20px] font-bold'>Tournaments</h1>

            <div className='mb-[15px] flex flex-row ml-[9%]'>
                <input
                    className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                    type="text"
                    name="tournament_name"
                    value={newTournament.tournament_name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />

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
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Teams = () => {

    const [team, setTeam] = useState([])
    const [newTeam, setNewTeam] = useState({
      team_name: '',
      country: '',
      master: '',
      rating: ''
    })

    useEffect(() => {
      fetchTeams()
    }, [])

    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:2000/teams')
        setTeam(response.data)
      } catch (error) {
        console.error('Error fetching teams:', error)
      }
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target
      setNewTeam({ ...newTeam, [name]: value })
    }

    const handleAddTeam = async () => {
        try {
          await axios.post('http://localhost:2000/teams', newTeam)
          fetchTeams()
          setNewTeam({
            team_name: '',
            country: '',
            master: '',
            rating: ''
        });
        } catch (error) {
          console.error('Error adding team:', error)
        }
    }

    const handleDeleteTeam = async (teamId) => {
        try {
          await axios.delete(`http://localhost:2000/teams?team_id=${teamId}`)
          fetchTeams()
        } catch (error) {
          console.error('Error deleting team:', error)
        }
    }

  const handleSearch = async (query) => {
    if (query.trim() === "") {
        fetchTeams()
        return
    }
    try {
      const response = await axios.get(`http://localhost:2000/teams/search/${query}`)
      setTeam(response.data)
    } catch (error) {
      console.error('Error searching teams:', error)
    }
  }

  return (
    <>
      <h1 className='mt-[50px] text-center mb-[20px] mr-[25px] font-bold'>Teams</h1>

        <div className='mb-[15px] mt-[15px] flex flex-row ml-[125px] gap-2'>

          <p>Search Team: </p>

          <input className='w-[200px]  mr-[10px] mb-[10px] border-[1px] border-[solid] border-[#232323]'
            type="text"
            placeholder="Search by name"
            onChange={(e) => handleSearch(e.target.value)}
          />

        </div>
    
        <table className='w-full border-collapse p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>
          <thead>
            <tr>
              <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Team ID</th>
              <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Team Name</th>
              <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Country</th>
              <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Master</th>
              <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Rating</th>
              <th className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>Actions</th>
            </tr>
          </thead>
          <tbody >
            {team.map((team) => (
              <tr key={team.team_id}>
                <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{team.team_id}</td>
                <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{team.team_name}</td>
                <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{team.country}</td>
                <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{team.master}</td>
                <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-left'>{team.rating}</td>
                <td className='p-[8px] border-[1px] border-[solid] border-[#ddd] text-center'>
                  <Link to={`/edit_team/${team.team_id}`}>
                    <button className='px-[10px] py-[6px] rounded-[4px] bg-[rgba(39,_208,_89,_0.8)] text-[#fff] border-[none] cursor-pointer'>Edit</button>
                  </Link>
                  <button className='ml-[5px] px-[10px] py-[6px] rounded-[4px] bg-[#dc3545] text-[#fff] border-[none] cursor-pointer' onClick={() => handleDeleteTeam(team.team_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='mb-[15px] mt-[15px] flex flex-row relative'>
            
          <input
            className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
            type="text"
            name="team_name"
            value={newTeam.team_name}
            placeholder="Team Name"
            onChange={handleInputChange}
          />

          <input
            className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
            type="text"
            name="country"
            value={newTeam.country}
            placeholder="Country"
            onChange={handleInputChange}
          />

          <input
            className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
            type="text"
            name="master"
            value={newTeam.master}
            placeholder="Master"
            onChange={handleInputChange}
          />
            
          <input
            className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
            type="text"
            name="rating"
            value={newTeam.rating}
            placeholder="Rating"
            onChange={handleInputChange}
          />
            
          <button className='rounded-[4px] bg-[rgba(39,_157,_245,_0.8)] text-[#fff] px-[15px] py-[2px] text-[14px] border-[none] cursor-pointer ml-[14px]'
            onClick={handleAddTeam}>
              Add
          </button>
        </div>
    </>
  )
}
export default Teams

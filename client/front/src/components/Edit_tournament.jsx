import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Edit_tournament = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [AddData, setAddData] = useState({
        tournament_name: '',
        first_team_id: '',
        second_team_id: '',
        third_team_id: '',
        fourth_team_id: '',
        location: '',
        start_date: '',
        end_date: '',
        id: ''
    })

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetchData()
        fetchTeams()
    }, [id])

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:2000/tournaments?tournament_id=${id}`
            )
            
            const { 
                tournament_name, first_team_id, second_team_id, third_team_id, fourth_team_id, location, start_date, end_date 
            } = response.data

            const newData = {
                tournament_name: tournament_name || '',
                first_team_id: first_team_id || '',
                second_team_id: second_team_id || '',
                third_team_id: third_team_id || '',
                fourth_team_id: fourth_team_id || '',
                location: location || '',
                start_date: start_date || '',
                end_date: end_date || '',
                id: id || ''
            }

            setAddData(newData)
        } catch (error) {
            console.log(error)
            throw error
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
        setAddData({ ...AddData, [name]: value })
    }

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:2000/tournaments?tournament_id=${id}`, AddData)
            navigate("/tournaments")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-[550px] h-[250px] bg-[rgba(255,_255,_255,_0.57)] rounded-[10px] backdrop-filter-[4px] flex flex-col justify-center items-center">
                <div className="mb-[15px]">
                    <div className="flex flex-row justify-center items-center mb-[15px]">
                        <input
                            className='w-[140px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="tournament_name"
                            placeholder="Name"
                            value={AddData.tournament_name}
                            onChange={handleInputChange}
                        />

                        <select
                            className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            name="first_team_id"
                            value={AddData.first_team_id}
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
                            value={AddData.second_team_id}
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
                            value={AddData.third_team_id}
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
                            value={AddData.fourth_team_id}
                            onChange={handleInputChange}>

                            <option value="">4th Team</option>
                            {teams.map((team) => (
                                <option key={team.team_id} value={team.team_id}>
                                    {team.team_name}
                                </option>
                            ))}
                        </select>
            
                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={AddData.location}
                            onChange={handleInputChange}
                        />

                        <input
                            className='w-[110px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="date"
                            name="start_date"
                            value={AddData.start_date}
                            onChange={handleInputChange}
                            placeholder="Start"
                        />

                        <input
                            className='w-[110px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="date"
                            name="end_date"
                            value={AddData.end_date}
                            onChange={handleInputChange}
                            placeholder="End"
                        />
                    </div>
  
                    <div className="mr-[20px]">
                        <button className='ml-[14px] text-[14px] px-[15px] py-[2px] rounded-[4px] bg-[#009dff] text-[#fff] border-[none] cursor-pointer' onClick={handleSave}>
                            Save
                        </button>
    
                        <Link to={`/tournaments`}>
                            <button className='ml-[14px] text-[14px] px-[15px] py-[2px] rounded-[4px] bg-[#fd1462] text-[#fff] border-[none] cursor-pointer'>
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit_tournament
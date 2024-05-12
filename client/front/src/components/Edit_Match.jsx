import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'

const Edit_Match = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [AddData, setAddData] = useState({
        start_datetime: '',
        first_team_score: '',
        second_team_score: '',
        id: ''
    })

    useEffect(() => {
        fetchData()
    }, [id])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/match?match_id=${id}`);
            const { start_datetime, first_team_score, second_team_score } = response.data;
            const newData = {
                start_datetime: start_datetime || '',
                first_team_score: first_team_score || '',
                second_team_score: second_team_score || '',
                id: id || ''
            }

            setAddData(newData)
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setAddData({ ...AddData, [name]: value })
    }

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/match?match_id=${id}`, AddData)
            navigate("/matches")
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
                            className='w-[110px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="date"
                            name="start_datetime"
                            value={AddData.start_datetime}
                            onChange={handleInputChange}
                            placeholder="Start"
                        />

                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="first_team_score"
                            placeholder="1st Score"
                            value={AddData.first_team_score}
                            onChange={handleInputChange}
                        />

                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="second_team_score"
                            placeholder="2nd Score"
                            value={AddData.second_team_score}
                            onChange={handleInputChange}
                        />

                    </div>
  
                    <div className="mr-[20px]">
                        <button className='ml-[14px] text-[14px] px-[15px] py-[2px] rounded-[4px] bg-[#009dff] text-[#fff] border-[none] cursor-pointer' onClick={handleSave}>
                            Save
                        </button>
    
                        <Link to={`/matches`}>
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

export default Edit_Match
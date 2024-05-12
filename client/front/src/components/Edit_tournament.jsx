import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'

const Edit_tournament = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [AddData, setAddData] = useState({
        tournament_name: '',
        location: '',
        start_date: '',
        end_date: '',
        id: ''
    });

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/tournaments?tournament_id=${id}`);
            const { tournament_name, location, start_date, end_date } = response.data;
            const newData = {
                tournament_name: tournament_name || '',
                location: location || '',
                start_date: start_date || '',
                end_date: end_date || '',
              id: id || ''
            };

            setAddData(newData);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddData({ ...AddData, [name]: value });
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/tournaments?tournament_id=${id}`, AddData);
            navigate("/tournaments");
        } catch (error) {
            console.log(error);
        }
    };

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
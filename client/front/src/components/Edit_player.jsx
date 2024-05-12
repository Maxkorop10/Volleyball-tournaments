import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'

const Edit_player = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [AddData, setAddData] = useState({
      first_name: '',
      last_name: '',
      position: '',
      id: ''
    });

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/players?player_id=${id}`);
            const { first_name, last_name, position } = response.data;
            const newData = {
                first_name: first_name || '',
                last_name: last_name || '',
                position: position || '',
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
            await axios.put(`http://localhost:5000/players?player_id=${id}`, AddData);
            navigate("/players");
        } catch (error) {
            console.log(error);
        }
    };

    const positionOptions = [
        { value: "Libero", label: "Libero" },
        { value: "Middle Blocker", label: "Middle Blocker" },
        { value: "Outside Hitter", label: "Outside Hitter" },
        { value: "Opposite Hitter", label: "Opposite Hitter" }
    ]

    return (
        <div className="flex justify-center items-center">
            <div className="w-[550px] h-[250px] bg-[rgba(255,_255,_255,_0.57)] rounded-[10px] backdrop-filter-[4px] flex flex-col justify-center items-center">
                <div className="mb-[15px]">
                    <div className="flex flex-row justify-center items-center mb-[15px]">
                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={AddData.first_name}
                            onChange={handleInputChange}
                        />
            
                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={AddData.last_name}
                            onChange={handleInputChange}
                        />

                        <select
                            className='w-[94px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            name="position"
                            value={AddData.position}
                            onChange={handleInputChange}>

                            <option value="">Select Position</option>
                            {positionOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
  
                    <div className="mr-[20px]">
                        <button className='ml-[14px] text-[14px] px-[15px] py-[2px] rounded-[4px] bg-[#009dff] text-[#fff] border-[none] cursor-pointer' onClick={handleSave}>
                            Save
                        </button>
    
                        <Link to={`/players`}>
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

export default Edit_player
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'

const Edit_stat = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [AddData, setAddData] = useState({
        points: '',
        attacks: '',
        blocks: '',
        assists: '',
        serves: '',
        receptions: '',
        errors: '',
        id: ''
    });

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/stats?stats_id=${id}`);
            const { points, attacks, blocks, assists, serves, receptions, errors } = response.data;
            const newData = {
                points: points || '',
                attacks: attacks || '',
                blocks: blocks || '',
                assists: assists || '',
                serves: serves || '',
                receptions: receptions || '',
                errors: errors || '',
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
            await axios.put(`http://localhost:5000/stats?stats_id=${id}`, AddData);
            navigate("/stats");
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
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="points"
                            placeholder="points"
                            value={AddData.points}
                            onChange={handleInputChange}
                        />

                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="attacks"
                            placeholder="attacks"
                            value={AddData.attacks}
                            onChange={handleInputChange}
                        />

                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="blocks"
                            placeholder="blocks"
                            value={AddData.blocks}
                            onChange={handleInputChange}
                        />

                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="assists"
                            placeholder="assists"
                            value={AddData.assists}
                            onChange={handleInputChange}
                        />

                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="serves"
                            placeholder="serves"
                            value={AddData.serves}
                            onChange={handleInputChange}
                        />

                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="receptions"
                            placeholder="receptions"
                            value={AddData.receptions}
                            onChange={handleInputChange}
                        />

                        <input
                            className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
                            type="text"
                            name="errors"
                            placeholder="errors"
                            value={AddData.errors}
                            onChange={handleInputChange}
                        />

                    </div>
  
                    <div className="mr-[20px]">
                        <button className='ml-[14px] text-[14px] px-[15px] py-[2px] rounded-[4px] bg-[#009dff] text-[#fff] border-[none] cursor-pointer' onClick={handleSave}>
                            Save
                        </button>
    
                        <Link to={`/stats`}>
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

export default Edit_stat
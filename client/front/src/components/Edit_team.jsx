import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'

const Edit_team = () => {

  const { id } = useParams();
    const navigate = useNavigate();
    const [AddData, setAddData] = useState({
      team_name: '',
      country: '',
      master: '',
      rating: '',
      id: ''
    });

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:2000/teams?team_id=${id}`);
            const { team_name, country, master, rating } = response.data;
            const newData = {
              team_name: team_name || '',
              country: country || '',
              master: master || '',
              rating: rating || '',
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
            await axios.put(`http://localhost:2000/teams?team_id=${id}`, AddData);
            navigate("/");
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
              name="team_name"
              placeholder="Team Name"
              value={AddData.team_name}
              onChange={handleInputChange}
            />

            <input
              className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
              type="text"
              name="country"
              placeholder="Country"
              value={AddData.country}
              onChange={handleInputChange}
            />

            <input
              className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
              type="text"
              name="master"
              placeholder="Master"
              value={AddData.master}
              onChange={handleInputChange}
            />

            <input
              className='w-[90px] mr-[10px] border-[1px] border-[solid] border-[#232323]'
              type="text"
              name="rating"
              placeholder="Rating"
              value={AddData.rating}
              onChange={handleInputChange}
            />
            </div>

            <div className="mr-[20px]">
              <button className='ml-[14px] text-[14px] px-[15px] py-[2px] rounded-[4px] bg-[#009dff] text-[#fff] border-[none] cursor-pointer' onClick={handleSave}>
                Save
              </button>

              <Link to={`/`}>
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

export default Edit_team

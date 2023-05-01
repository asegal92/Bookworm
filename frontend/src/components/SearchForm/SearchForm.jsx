import React, { useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./SearchForm.css";

const SearchForm = () => {
    const searchText = useRef('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(`/search?q=${searchText.current.value}`);
    };

    return (
        <div className='search-form'>
         <div className='container'>
          <div className='search-form-content'>
            <form className='search-form' onSubmit={handleSubmit}>
              <div className='search-form-elem flex flex-sb bg-white'>
                <input type = "text" className='form-control' placeholder="I'm looking for ..." ref = {searchText} />
                <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
                  <FaSearch className='text-purple' size = {30} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  

export default SearchForm
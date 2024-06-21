/* eslint-disable no-undef */
// src/SearchBar.js
import React, { useState } from 'react';


const Sear2ch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [options] = useState(['Narendra Modi', 'Giorgia Meloni', 'Navneet Rana', 'Amit shah' , 'Elon musk' , 'Joe Biden']);
    const [filteredOptions, setFilteredOptions] = useState([]);

    const handleInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        if (value) {
            setFilteredOptions(options.filter(option => option.toLowerCase().includes(value)));
        } else {
            setFilteredOptions([]);
        }
    };

    const handleOptionClick = (option) => {
        setSearchTerm(option);
        setFilteredOptions([]);
    };

    return (
        <div  className="search-container">
            <input 
                type="text"
                id='scinput2'
                className='scdinput'
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            {filteredOptions.length > 0 && (
                <div id='oc1' className="options-container">
                    {filteredOptions.map((option, index) => (
                        <div 
                            key={index} 
                            className="option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sear2ch;

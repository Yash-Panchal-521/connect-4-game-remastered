import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
    const [aiDifficulty, setAiDifficulty] = useState(null);

    const handleDropdownSelect = (eventKey) => {
        setAiDifficulty(eventKey);
    };

    const handleClick = () => {
        window.location.href = 'https://github.com/Yash-Panchal-521';
    };

    return (
        <div className='bg-teal-500 h-10 flex flex-row w-full'>
            <div className='w-1/3 m-1.5 pxy-10 text-center text-slate-900 hover:bg-slate-900 hover:text-teal-300 hover:border hover:border-slate-900 hover:rounded-lg'>home</div>
            <div className='w-1/3 m-1.5 pxy-10 text-center text-slate-900 hover:bg-slate-900 hover:text-teal-300 hover:border hover:border-slate-900 hover:rounded-lg'>
                <Dropdown onSelect={handleDropdownSelect}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Ai difficulty
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='p-5'>
                        <Dropdown.Item eventKey="3">Easy</Dropdown.Item>
                        <br />
                        <Dropdown.Item eventKey="5">Medium</Dropdown.Item>
                        <br />
                        <Dropdown.Item eventKey="7">Hard</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='w-1/3 m-1.5 pxy-10 text-center text-slate-900 hover:bg-slate-900 hover:text-teal-300 hover:border hover:border-slate-900 hover:rounded-lg' onClick={handleClick}>About me</div>
        </div>
    );
}

export default Navbar;

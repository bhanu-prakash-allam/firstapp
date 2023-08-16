import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

function Time() {
    const [timesheetData, setTimesheetData] = useState({});
    const [formData, setFormData] = useState(Array(14).fill(''));
    const [project, setProject] = useState('wfs');
    const handleFormChange = (index, value) => {
        const updatedFormData = [...formData];
        updatedFormData[index] = value;
        setFormData(updatedFormData);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = localStorage.getItem("username");
        const newTimesheetData = {
            [username]: {},
        };
        formData.forEach((value, index) => {
            const formattedDate = `${index + 1}-${new Date().toLocaleString('default', { month: 'short' })}-${new Date().getFullYear()}`;
            newTimesheetData[username][formattedDate] = value.toString();
        });
        newTimesheetData[username]['project'] = project;
        console.log(newTimesheetData)
        setTimesheetData(newTimesheetData);

    };
    const renderTimeDisplay = () => {
        return formData.map((item, index) => (
            <div className='col me-2' key={index}>
                <div className='row'>
                    <label className='form-control-sm'>{`${index + 1}-${new Date().toLocaleString('default', { month: 'short' })}-${new Date().getFullYear()}`}</label>
                </div>
                <div className='row'>
                    <input type='text' className='form-control form-control-md' onChange={(e) => handleFormChange(index, e.target.value)} />
                </div>
            </div>
        ));
    }

    return (
        <div className="container vh-100 d-flex flex-column">
            <div className="d-flex justify-content-end mt-3">
                <Link to="/greet" className="btn btn-primary btn-sm me-2">Home</Link>
                <Logout />
            </div>
            {/* Time Card Dropdown */}
            {/* <div className="position-absolute top-0 start-0 mt-3 ms-3">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="timeCardDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Time Card
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="timeCardDropdown">
                        <li><Link to="/time" className="dropdown-item">Time Entry</Link></li>
                    </ul>
                </div>
            </div> */}
            <div className='row justify-content-center align-items-center' style={{ height: '50vh' }}>
                <div className='col'>
                    <h6>Select Project</h6>
                    <select value={project} className='form-control form-control-md' onChange={e => setProject(e.target.value)}>
                        <option value="wfs">WFS</option>
                        <option value="elw">ELW</option>
                    </select>
                </div>
                {renderTimeDisplay()}
            </div>
            <div className='text-center'>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Time;

import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearEmployees } from '../features/employeeSlice';
import Table from 'inesder-table';

const EmployeeList = () => {
    const employees = useSelector((state) => state.employees.employees);
    const dispatch = useDispatch();

    const theadData = useMemo(() => [
        "First Name", "Last Name", "Start Date", "Department", "Date of Birth", "Street", "City", "State", "Zip Code"
    ], []);

    const tbodyData = useMemo(() => (
        employees.length > 0 ? employees.map((employee, index) => ({
            id: employee.id || index.toString(),
            items: [
                employee.firstName,
                employee.lastName,
                employee.startDate,
                employee.department,
                employee.dateOfBirth,
                employee.street,
                employee.city,
                employee.state,
                employee.zipCode
            ]
        })) : [{
            id: "0",
            items: ["No employees found.", "", "", "", "", "", "", "", ""]
        }]
    ), [employees]);

    const handleClearEmployees = () => {
        dispatch(clearEmployees());
    };

    return (
        <div id="employee-div" className="container-table">
            <h2>Current Employees</h2>
            <Link to="/" className="back-home">Home</Link>
            <Table
                thBackgroundColor='#89A8B2'
                buttonBackgroundColor='#89A8B2'
                theadData={theadData}
                tbodyData={tbodyData}
            />
            <button className='button' onClick={handleClearEmployees}>Delete All</button>
        </div>
    );
};

export default React.memo(EmployeeList);

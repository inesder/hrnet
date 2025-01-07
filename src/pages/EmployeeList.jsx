import '../styles/styles.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearEmployees } from '../features/employeeSlice';
import Table from 'inesder-table';



function EmployeeList() {
    const employees = useSelector((state) => state.employees.employees);
    console.log('Employees in Redux:', employees);

    const theadData = ["First Name", "Last Name", "Start Date", 'Department', "Date of Birth", "Street", "City", "State", "Zip Code"];

    // Vérifie si employees est vide
    const tbodyData = employees.length > 0 ? employees.map((employee, index) => ({
        id: index.toString(),
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
    })) : [ {
        id: "0",
        items: ["No employees found.", "", "", "", "", "", "", "", ""]
    },];
    const dispatch = useDispatch();
    const handleClearEmployees = () => {
        dispatch(clearEmployees())
    }

    return (
        <div id="employee-div" className="container-table">
            <h2>Current employees</h2>
            <Link to="/">Home</Link>
            <Table thBackgroundColor='#89A8B2' buttonBackgroundColor='#89A8B2' theadData={theadData} tbodyData={tbodyData}/>
            <button className='button' onClick={handleClearEmployees}> delete</button>
        </div>
    );
}

export default EmployeeList;

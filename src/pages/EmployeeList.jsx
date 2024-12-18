import '../styles/styles.css';
import Table from "../components/Table";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearEmployees } from '../features/employeeSlice'

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
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Table theadData={theadData} tbodyData={tbodyData} customClass="employees"/>
            <Link to="/">Home</Link>
            <button onClick={handleClearEmployees}> delete</button>
        </div>
    );
}

export default EmployeeList;

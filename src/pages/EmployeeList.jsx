import '../styles/styles.css';
import Table from "../components/Table";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


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
    })) : [];

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            {employees.length === 0 ? (
                <p>No employees found. Please add some employees!</p>
            ) : (
                <Table theadData={theadData} tbodyData={tbodyData} />
            )}
            <Link to="/">Home</Link>
        </div>
    );
}

export default EmployeeList;

import '../styles/styles.css';
import Table from "../components/Table";
import { useSelector } from 'react-redux';

function EmployeeList(){
    const employees = useSelector((state) => state.employees.employees);
    console.log('Employees in Redux:', employees);
    const theadData = ["First Name", "Last Name", "Start Date", 'Department', "Date of Birth", "Street", "City", "State", "Zip Code"];

    const tbodyData = [
        {
            id: "1",
            items: ["John", "Clark", "01/01/2025", "Marketing", "01/01/1968", "Park Avenue", "New York", "United States", "10012"],
        }
    ];
return(
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <a href="index.html">Home</a>
            <Table theadData={theadData} tbodyData={tbodyData} />
        </div>
)
}

export default EmployeeList

import '../styles/styles.css';
import Table from "../components/Table";


function EmployeeList(){
    const theadData = ["First Name", "Last Name", "Start Date", 'Department', "Date of Birth", "Street", "City", "State", "Zip Code"];

    const tbodyData = [
        {
            id: "1",
            items: ["John", "Clark", "01/01/2025", "Marketing", "01/01/1968", "Park Avenue", "New York", "United States", "10012"],
        }
    ];
return(
        <div id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <a href="index.html">Home</a>
            <Table theadData={theadData} tbodyData={tbodyData} />
        </div>
)
}

export default EmployeeList

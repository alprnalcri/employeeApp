import React from 'react'
import Employee from '../employee/Employee';

function EmployeeList({ employees, setList }) {
    const handleClearAll = () => {
        setList([])
    }
    return (
        <div>
            <h3>Employee List {employees.length}</h3>
            {
                employees.map((emp, index) => (
                <Employee employee={emp} 
                setList = {setList}
                handleClearAll ={handleClearAll}/>
            ))
            }
            <button onClick={handleClearAll}>Clear All</button>
        </div>
    )
}

export default EmployeeList;
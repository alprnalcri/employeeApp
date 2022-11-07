import { useState } from "react";
import EmployeeList from "./components/employeeList/EmployeeList";
import {employees} from "./data/data"
function App() {

  const [List,setList] = useState(employees)

  return(
  <div>
    <h1>Employees App</h1>
    <EmployeeList employees ={List} setList ={setList}/>
  </div>
  )
}

export default App;
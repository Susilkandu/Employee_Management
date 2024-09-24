import CreateEmployee from "./subComponents/CreateEmployee";
import EmployeeList from "./subComponents/EmployeeList";
import Header from "./subComponents/Header";
import {Routes, Route} from "react-router-dom"
export default function Dashboard(){
    
    return( 
        <>
        <Header/>
        <Routes>
            <Route path="/Create Employee" element={<CreateEmployee/>} />
            <Route path="/Employee List" element={<EmployeeList/>}/>
            <Route path="Edit-Employee"/>
        </Routes>
        </>
    )
}
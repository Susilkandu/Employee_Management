import React from "react"
import{Routes, Route} from "react-router-dom"
import LoginPage from "./component/LoginPage"
import Dashboard from "./component/dashboard/Dashboard"
export default function App(){
return(
  <>
  <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/Dashboard/*" element={<Dashboard/>}/>
  </Routes>
   </>
)
}

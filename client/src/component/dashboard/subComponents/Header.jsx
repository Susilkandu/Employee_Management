import { useState } from "react"
import {Link} from "react-router-dom"
export default function Header(){
    const [pathName, setPathName] = useState('');
    const handlePathName = (e)=>{
        setPathName(e.target.name)
    }
    return(
        <div>
            <img src="images/logo.jpeg"  alt="" style={{display:"block",width:"4rem",height:"4rem",borderRadius:"1.5rem"}}/>
            <nav className="nav-bar" style={{display:"flex", flexWrap:'nowrap', justifyContent:"space-evenly", padding:"0.5rem"}}>
             <ul style={{display:"flex", justifyItems:"flex-start", justifyContent:"space-around", width:"60%"}}>
                <li style={{listStyle:"none"}} ><Link to="" name = "Dashboard" onClick={handlePathName}>Home</Link></li>
                <li style={{listStyle:"none"}} ><Link to="Create Employee" name = "Create Employee" onClick={handlePathName}>Create Employee</Link></li>
                <li style={{listStyle:"none"}}><Link to="Employee List" name = "Employee List" onClick={handlePathName}>Employee List</Link></li>
             </ul>
             <ul style={{display:"flex", justifyContent:"space-evenly", width:"40%"}}>
                <li style={{listStyle:"none"}}><Link>Hukum Gupta</Link></li>
                <li style={{listStyle:"none", marginTop:"-0.5rem"}}><button>Logout</button></li>
             </ul>
            </nav>
            <div style={{display:'block', fontSize:"1rem",padding:"8px", color:"var(--text-color)", backgroundColor:"var(--primary-color)",justifyContent:"left"}}>{pathName}</div>
        </div>
    )
}
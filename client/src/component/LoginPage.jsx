import { useState } from "react";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
export default function LoginPage(){
   const navigate = useNavigate();

    // it is initial form data
    const initialFormData = {
        userName : "",
        password : ""
    }
    // State are here
    const [formData, setFormData ] = useState(initialFormData);

// Our Control function are here
    //reset form
    const resetForm = ()=>{
    /*  */    setFormData(initialFormData);
    }
    // to handle form data
    const handleForm = (e)=>{
        const {name,value}=e.target
        setFormData(prevData =>({
            ...prevData,
            [name]:value
        }));
    }
    // submitForm function
    const submitForm = async(e)=>{
        e.preventDefault();
        try {
            // const rspns = await loginAdmin(formData);
            // if(rspns.ackbool==1){
            //     toast.success(rspns.message);
            // }
            navigate('/Dashboard')
            console.log(formData)
        } catch (error) {
            toast.error(error);
        }
    }
    return(
        <div>
            <img src="images/logo.jpeg"  alt="" style={{display:"block",width:"4rem",height:"4rem",borderRadius:"1.5rem"}}/>
            <div style={{display:'block', fontSize:"1rem",padding:"8px", color:"var(--text-color)", backgroundColor:"var(--primary-color)",justifyContent:"left"}}>Login Page</div>
            <form onSubmit={submitForm} method="post" style={{margin:"16px 100px 100px"}}>
                <div className="user-name" style={{display:"flex",width:"100%"}}>
                  <span>User Name</span> 
                  <input type="text" name="userName" style={{color:"var(--text-color)", marginLeft:'4rem', width:"40%"}} onChange={handleForm}/>
                </div>
                <div className = "password" style={{display:"flex", marginTop:'1rem'}}>
                  <span>Password</span> 
                  <input type="password" name="password" style={{color:"var(--text-color)", marginLeft:'4.67rem' ,width:"40%"}}onChange={handleForm}/>
                </div>
                <button type="submit" style={{backgroundColor:"var(--secondary-color)", marginTop:'1rem' , marginLeft:'9rem', width:"41%", cursor:"pointer", fontSize:"1rem", fontWeight:"bold"}}>Login</button>
            </form>
        </div>
    )
}
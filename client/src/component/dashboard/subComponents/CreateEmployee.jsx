import { useState } from "react";
import { toast } from "react-toastify";
import { validateMobileNo} from "../../../tools/validation";
export default function CreateEmployee() {
  const initialFormData = {
    Name: "",
    Email: "",
    MobileNo: "",
    Designation: "",
    Gender: "",
    Course: "",
  };
  const [formData, setFormData] = useState(initialFormData); //It handle formData except image
  const [image, setImage] = useState(null); //Setting image state at top level
  //Below function set our form Data whenever our form value change except photo
  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
//   below function set the image state via choosen photo
  const setFile = (e) => {
    try {
      const photo = e.target.files[0];
      setImage(photo);
    } catch (error) {
      toast.error(error);
    }
  };
//   below function is used to submit form 
  const SubmitForm = async(e)=>{
    e.preventDefault();
    try {
        if(validateMobileNo(formData.MobileNo)){
            const newData = new FormData();
            newData.append('Image',image);
            Object.entries(formData).forEach(([key, value]) => {
            newData.append(key,value)
            });
           // Log the FormData contents
           for (let [key, value] of newData.entries()) {
            console.log(`${key}: ${value}`);
           }
           resetForm();
            // sending request
        }
        else{
            toast.error("Please Enter Valid Mobile Number");
        }
    } catch (error) {
        console.log(error);
    }
  }
  const resetForm = ()=>{
    setFormData(initialFormData);
    setImage(null);
  }
  return (
<div className="CreateEmployeeForm" style={{ marginLeft: "8rem" }}>
    <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }}>
        <tbody>
            <tr style={{ display: "flex", alignItems: "center" }}>
                <td style={{ width: "20%", marginRight: "20px" }}>
                    <label htmlFor="Name">Name</label>
                </td>
                <td style={{ width: "80%" }}>
                    <input type="text" name="Name" value={formData.Name} onChange={handleChangeValue} />
                </td>
            </tr>
            <tr style={{ display: "flex", alignItems: "center" }}>
                <td style={{ width: "20%", marginRight: "20px" }}>
                    <label htmlFor="Email">Email</label>
                </td>
                <td style={{ width: "80%" }}>
                    <input type="email" name="Email" value={formData.Email} onChange={handleChangeValue} />
                </td>
            </tr>
            <tr style={{ display: "flex", alignItems: "center" }}>
                <td style={{ width: "20%", marginRight: "20px" }}>
                    <label htmlFor="Mobile No.">Mobile No.</label>
                </td>
                <td style={{ width: "80%" }}>
                    <input type="text" name="MobileNo" value={formData.MobileNo} maxLength={10} onChange={handleChangeValue} />
                </td>
            </tr>
            <tr style={{ display: "flex", alignItems: "center" }}>
                <td style={{ width: "20%", marginRight: "20px" }}>
                    <label htmlFor="Designation">Designation</label>
                </td>
                <td style={{ width: "80%" }}>
                    <select name="Designation" value={formData.Designation} onChange={handleChangeValue}>
                        <option value="">--Select Designation--</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </td>
            </tr>
            <tr style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <td style={{ width: "20%", marginRight: "20px" }}>
                    <label htmlFor="Gender">Gender</label>
                </td>
                <td style={{ width: "80%", display: "flex", gap: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="radio"
                            name="Gender"
                            value="Male"
                            id="Male"
                            checked={formData.Gender === "Male"}
                            onChange={handleChangeValue}
                        />
                        <label htmlFor="Male" style={{ marginLeft: "5px" }}>Male</label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="radio"
                            name="Gender"
                            value="Female"
                            id="Female"
                            checked={formData.Gender === "Female"}
                            onChange={handleChangeValue}
                        />
                        <label htmlFor="Female" style={{ marginLeft: "5px" }}>Female</label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="radio"
                            name="Gender"
                            value="Other"
                            id="Others"
                            checked={formData.Gender === "Other"}
                            onChange={handleChangeValue}
                        />
                        <label htmlFor="Others" style={{ marginLeft: "5px" }}>Others</label>
                    </div>
                </td>
            </tr>
            <tr style={{ display: "flex", alignItems: "center" }}>
                <td style={{ width: "20%", marginRight: "20px" }}>
                    <label htmlFor="Course">Select Course</label>
                </td>
                <td style={{ width: "80%" }}>
                    <select name="Course" value={formData.Course} onChange={handleChangeValue} required>
                        <option value="">--Select Course--</option>
                        <option value="MCA">MCA</option>
                        <option value="BCA">BCA</option>
                        <option value="BSC">BSC</option>
                    </select>
                </td>
            </tr>
            <tr style={{ display: "flex", alignItems: "center" }}>
                <td style={{ width: "20%", marginRight: "20px" }}>
                    <label htmlFor="Upload Image">Upload Image</label>
                </td>
                <td style={{ width: "80%" }}>
                    <input type="file" name="File" onChange={setFile} required />
                </td>
            </tr>
        </tbody>
    </table>
    <button type="button" onClick={SubmitForm}>Submit</button>
</div>
  );
}

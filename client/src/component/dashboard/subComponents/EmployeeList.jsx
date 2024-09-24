import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function EmployeeList  ()  {
    const [searchKeyword, setSearchKeyword] = useState('');
    const employees = [
        {
            uniqueId: 1,
            name: "Hukum",
            email: "hcgupta@cstech.in",
            mobileNo: "954010044",
            designation: "HR",
            gender: "Male",
            course: "MCA",
            createDate: "13-Feb-21"
        }
    ];

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' ,display:"flex", flexDirection:"column", float:"right"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
                <span>Total Count: {filteredEmployees.length}</span>
                <button><Link to="/Create Employee" style={{ marginLeft: '20px' }}>Create Employee</Link></button>
                </div>
                <div>
                <span>Search</span>
                <input
                    type="text"
                    placeholder="Enter Search Keyword"
                    value={searchKeyword}
                    onChange={handleSearchChange}
                    style={{ marginLeft: '20px', padding: '5px' }}
                />
                </div>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Unique Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Create Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map(employee => (
                        <tr key={employee.uniqueId}>
                            <td>{employee.uniqueId}</td>
                            <td><img src="#" alt="Profile" style={{ width: '50px', height: '50px' }} /></td> {/* Placeholder for image */}
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.mobileNo}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.course}</td>
                            <td>{employee.createDate}</td>
                            <td>
                                <button>Edit</button> - 
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

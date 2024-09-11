import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const EmployeeDetails = () => {

  const state = useLocation();
  const [employee, setEmployee] = useState();
  const [loading, setLoading] = useState(true);

  let fetchEmployee = async() => {
    try{
      setLoading(true);
      const employeeId = state.state.uid;
      console.log(employeeId)
      await axios.post('http://localhost:5000/api/employees/employee_detail', {employeeId})
      .then((res) => {
        console.log(res);
        setEmployee(res.data.employee);
        setLoading(false);
      })
    }
    catch(e){
      console.log(e);
    }
    
  }

  console.log(employee);

  useEffect(() => {fetchEmployee()}, []);
  
  if(loading){
    return (
      <div>Loading....</div>
    )
  }

  return (
    <div className='bg-white pt-5 mt-8'>

      {/* Name and Contact */}
      <div className="text-center p-4">
        <h2 className="text-xl font-semibold">{`${employee.firstName} ${employee.lastName}`}</h2>
        <p className="text-gray-500 text-sm">{employee.email}</p>
      </div>

      {/* Demographics Section */}
      <div className="p-4 border-t">
        <h3 className="text-lg font-medium mb-2">Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Employee ID</p>
            <p className="text-gray-800">{employee.employeeId}</p>
          </div>
          <div>
            <p className="text-gray-600">Phone Number</p>
            <p className="text-gray-800">{employee.phoneNumber}</p>
          </div>
          <div>
            <p className="text-gray-600">Date of Birth</p>
            <p className="text-gray-800">{employee.dateOfBirth}</p>
          </div>
          <div>
            <p className="text-gray-600">Department</p>
            <p className="text-gray-800">{employee.department}</p>
          </div>
          <div>
            <p className="text-gray-600">Position</p>
            <p className="text-gray-800">{employee.position}</p>
          </div>
          <div>
            <p className="text-gray-600">Date of Joining</p>
            <p className="text-gray-800">{employee.dateOfJoining}</p>
          </div>
          <div>
            <p className="text-gray-600">Salary</p>
            <p className="text-gray-800">{employee.salary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;

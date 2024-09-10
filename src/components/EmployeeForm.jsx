import React, { useState } from 'react'
import axios from 'axios';

const EmployeeForm = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [employeeData, setEmployeeData] = useState({
    employeeId : '',
    firstName : '',
    lastName : '',
    email : '',
    phoneNumber : '',
    dateOfBirth :'',
    department : '',
    position : '',
    dateOfJoining : '',
    salary : ''
  })

  const changeHandler = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name] : e.target.value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(employeeData);
    try{
      await axios.post('http://localhost:5000/api/employees/add_employee',
        employeeData
      )
      .then((res) => {
        console.log(res);
        if(res.data.success){
          setEmployeeData({
            employeeId : '',
            firstName : '',
            lastName : '',
            email : '',
            phoneNumber : '',
            dateOfBirth :'',
            department : '',
            position : '',
            dateOfJoining : '',
            salary : ''
          });
          setErrorMessage('');
        }
        else{
          setErrorMessage(res.data.message);
        }
      })
    }
    catch(e){
      console.log(e);
      setErrorMessage(e.response.data.message);
    }
  }
  return (
    <div className="mt-6 bg-white p-3 sm:p-6 rounded-md shadow-md max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-center md:text-left mb-5 text-gray-800">Add New Employee</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600">Employee ID</label>
              <input
                type="text"
                placeholder="Employee ID..."
                name='employeeId'
                required
                value={employeeData.employeeId}
                onChange={changeHandler}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={employeeData.firstName}
                  onChange={changeHandler}
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={employeeData.lastName}
                  onChange={changeHandler}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">Email Address</label>
                <input
                  type="email"
                  name='email'
                  required
                  value={employeeData.email}
                  onChange={changeHandler}
                  placeholder="Enter Work Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone</label>
                <input
                  type="number"
                  name='phoneNumber'
                  placeholder="Enter Phone Number"
                  onChange={changeHandler}
                  value={employeeData.phoneNumber}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  onChange={changeHandler}
                  name='dateOfBirth'
                  value={employeeData.dateOfBirth}
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Department</label>
                <select
                  required
                  placeholder="Enter"
                  name='department'
                  onChange={changeHandler}
                  value={employeeData.department}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value=''>Select Department</option>
                  <option value='IT'>IT</option>
                  <option value='HR'>HR</option>
                  <option value='Finence'>Finence</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">Position</label>
                <input
                  type="text"
                  onChange={changeHandler}
                  name='position'
                  value={employeeData.position}
                  placeholder="Position"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Date of Joining</label>
                <input
                  type="date"
                  required
                  onChange={changeHandler}
                  name='dateOfJoining'
                  value={employeeData.dateOfJoining}
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600">Salary</label>
              <input
                type="number"
                value={employeeData.salary}
                name='salary'
                required
                onChange={changeHandler}
                placeholder="Salary"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <p className='text-red-500 text-md'>{errorMessage}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-purple-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-700"
              >
                Add
              </button>
              {/* <button
                type="button"
                className="bg-purple-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-700"
              >
                Save & Add Another
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md shadow-md hover:bg-gray-400"
              >
                Cancel
              </button> */}
            </div>
          </form>
        </div>
  )
}

export default EmployeeForm
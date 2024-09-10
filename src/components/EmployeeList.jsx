import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
  

  const [employees, setEmployees] = useState();

  const fetchEmployees = async() => {
    await axios.get('http://localhost:5000/api/employees')
    .then((res) => {
      console.log(res);
      setEmployees(res.data.employees);
    })
  }

  // State to store search input and filter criteria
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('id');

  let filterChangeHandler = (e) => {
    setSearchBy(e.target.value);
  }

  let searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  // Function to filter employees based on search criteria
  const filteredEmployees = employees?.filter((employee) => {
    if (searchBy === 'id') return employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchBy === 'firstName') return employee.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchBy === 'lastName') return employee.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchBy === 'dateOfJoining') return employee.dateOfJoining.includes(searchTerm);
    if (searchBy === 'department') return employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    return true;
  });

  let clearFilter = () => {
    setSearchTerm('id');
  }

  useEffect(() => {fetchEmployees();}
  , []);

  return (
    <div class="container mx-auto p-4">
        {/* <!-- Search bar and dropdown --> */}
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Employee Directory</h1>
            <div class="flex items-center space-x-4">
                {/* <!-- Department Dropdown --> */}
                <select onChange={filterChangeHandler} class="border border-gray-300 p-2 rounded-lg bg-white">
                    <option value="id">id</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="department">Department</option>
                    <option value="dsteOfJoining">Date of Joining</option>
                </select>
                {/* <!-- Search Bar --> */}
                <input value={searchTerm} onChange={searchChangeHandler} type="text" placeholder="Search..." class="border border-gray-300 p-2 rounded-lg w-64" />
                <button onClick={clearFilter}>Clear Filter</button>
            </div>
        </div>

        {/* <!-- Employee Cards Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* <!-- Card 1 --> */}
            {
              filteredEmployees && filteredEmployees.length && filteredEmployees.map((employee) => {
                return (
                  <div class="bg-white rounded-lg shadow-lg p-4">
                      <img src="https://via.placeholder.com/150" alt="Marion Farrel" class="rounded-full mx-auto mb-4 w-20 h-20" />
                      <p class="text-center text-gray-500">{employee.employeeId}</p>
                      <h2 class="text-center text-lg font-semibold">{`${employee.firstName} ${employee.lastName}`}</h2>
                      <p class="text-center text-sm text-green-500">{employee.department}</p>
                      <p class="text-center text-gray-500 mb-4">{employee.dateOfJoining.split('T')[0]}</p>
                      <div class="text-sm text-gray-600 space-y-1">
                          <p>Email: {employee.email}</p>
                          <p>Mob: {employee.phoneNumber}</p>
                          {/* <p>Tel: 250 (003-350) Ext: 456</p> */}
                      </div>
                  </div>
                )
              })
            }

            {/* <!-- Add more cards following this structure --> */}
            {/* <!-- You can add additional employee cards by copying and modifying the above blocks --> */}
        </div>
    </div>
  );
};

export default EmployeeList;

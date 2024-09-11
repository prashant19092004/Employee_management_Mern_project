import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EmployeeCard from './EmployCard';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState();
  const [searchType, setSearchType] = useState('text');
  // const [filteredEmployees, setFilteredEmployees] = useState();

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
    console.log(e.target.value);
    if(e.target.value === 'dateOfJoining'){
      setSearchType('date');
    }
    else{
      setSearchType('text');
    }
    setSearchBy(e.target.value);
  }

  let searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  // Function to filter employees based on search criteria
  let filteredEmployees = employees?.filter((employee) => {
    if (searchBy === 'id') return employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchBy === 'firstName') return employee.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchBy === 'lastName') return employee.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    if (searchBy === 'dateOfJoining') return employee.dateOfJoining.includes(searchTerm);
    if (searchBy === 'department') return employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    return true;
  });

  let clearFilter = () => {
    setSearchTerm('');
    setSearchBy('id');
    setSearchType('text');
    filteredEmployees = employees;
  }

  let employeeProfile = (uid) => {
    console.log(uid);
    navigate(
      '/employee_details',
      {
        state: {
          uid
        }
      }
    );
  }

  useEffect(() => {fetchEmployees();}
  , []);


  return (
    <div class="container mx-auto p-4">
        {/* <!-- Search bar and dropdown --> */}
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Employee Directory</h1>
        </div>
        <div class="flex items-center flex-wrap gap-2 mb-5">
                {/* <!-- Department Dropdown --> */}
                <select onChange={filterChangeHandler} class="border sm:w-auto border-gray-300 p-2 rounded-lg bg-white">
                    <option value="id">id</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="department">Department</option>
                    <option value="dateOfJoining">Date of Joining</option>
                </select>
                {/* <!-- Search Bar --> */}
                <input value={searchTerm} onChange={searchChangeHandler} type={searchType === 'text' ? 'text' : 'date'} placeholder="Search..." class="border w-full sm:w-auto border-gray-300 p-2 rounded-lg" />
                <button onClick={clearFilter}>Clear Filter</button>
        </div>

        {/* <!-- Employee Cards Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* <!-- Card 1 --> */}
            {
              filteredEmployees && filteredEmployees.length && filteredEmployees.map((employee) => {
                return (
                  <EmployeeCard employee={employee} employeeProfile={employeeProfile} />
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

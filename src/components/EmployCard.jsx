import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMobileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";

const EmployeeCard = (props) => {
    const navigate = useNavigate();
  return (
    <div className="border rounded-lg shadow-md bg-white flex flex-col items-start text-left">
        <div className='p-4 flex flex-col w-full'>
            {/* Employee Info */}
            <h4 className="text-md font-semibold text-green-600">{`${props.employee.firstName} ${props.employee.lastName}`}</h4>
            {/* <p className="text-gray-600">{employee.position}</p> */}
            <p className="text-sm text-gray-400">{props.employee.department}</p>
        </div>

    <hr className='border-spacing-2 w-full' />
    
      {/* Contact Details */}
      <div className='p-4 flex flex-col w-full'>
        <div className="text-left text-sm text-gray-600 w-full">
            <p className="flex items-center">
            <FaEnvelope className="mr-2 text-gray-500" />
            {props.employee.email}
            </p>
            <p className="flex items-center mt-2">
            <FaMobileAlt className="mr-2 text-gray-500" />
            {props.employee.phoneNumber}
            </p>
            <p className="flex items-center mt-2">
            <MdDateRange className="mr-2 text-gray-500" />
            {props.employee.dateOfJoining.split('T')[0]}
            </p>
            <p className="mt-2">
            <strong>ID: </strong> {props.employee.employeeId}
            </p>
            <div className='flex justify-center mt-3 w-full'>
                <button onClick={() => props.employeeProfile(props.employee.employeeId)} className='px-4 py-2 bg-purple-600 text-white rounded-lg'>View Detail</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee.js');

// @route   POST /api/employees
// @desc    Add a new employee
router.post('/add_employee', async (req, res) => {
    const { employeeId, firstName, lastName, email, phoneNumber, dateOfBirth, department, position, dateOfJoining, salary } = req.body;

    // Simple validation
    if (!employeeId) {
        return res.status(500).json({ msg: 'Please enter Employee Id', seccess : false });
    }

    if (!firstName) {
        return res.status(500).json({ msg: 'Please enter First Name', seccess : false });
    }

    if (!lastName) {
        return res.status(500).json({ msg: 'Please enter Last Name', seccess : false });
    }

    if (!email) {
        return res.status(500).json({ msg: 'Please enter Email', seccess : false });
    }

    if (!department) {
        return res.status(500).json({ msg: 'Please enter Department', seccess : false });
    }

    if (!dateOfJoining) {
        return res.status(500).json({ msg: 'Please enter Date of Joining', seccess : false });
    }

    if (!salary) {
        return res.status(500).json({ msg: 'Please enter Salary', seccess : false });
    }

    const currentEmployeeId = await Employee.findOne({employeeId});
    if(currentEmployeeId){
        return res.status(500).json({ message : 'Employee ID Already Exist', success : false});
    }

    const currentEmployeeEmail = await Employee.findOne({email});
    if(currentEmployeeEmail){
        res.status(500).json({ message : 'Email Already Exist', success : false});
    }

    try {
        const newEmployee = new Employee({
            employeeId,
            firstName,
            lastName,
            email,
            phoneNumber,
            dateOfBirth,
            department,
            position,
            dateOfJoining,
            salary
        });

        const employee = await newEmployee.save();
        res.status(200).json({message : "Employee Added", employee, success : true});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message : 'Server Error', success : false});
    }
});

// @route   GET /api/employees
// @desc    Search employees
router.get('/', async (req, res) => {

    try {
        const employees = await Employee.find();
        res.status(200).json({ success : true, employees});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({message : 'Server Error', success : false});
    }
});

router.post('/employee_detail', async(req, res) => {
    const { employeeId } = req.body;

    try{
        const currentEmployee = await Employee.findOne({employeeId});
        res.status(200).json({ message : 'User Found', success : true, employee : currentEmployee})
    }
    catch(e){
        res.status(500).json({message : 'Internal Server Error', success : false});
    }
})

module.exports = router;

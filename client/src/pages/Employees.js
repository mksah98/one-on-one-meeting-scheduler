import axios from 'axios';
import { useState, useEffect } from 'react';

import { Table } from 'react-bootstrap';

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getEmployees();
    }, [])

    const getEmployees = async () => {
        try {
            const response = await axios('http://localhost:4000/employees/list');
            console.log(response.data);
            setEmployees(response.data.employees);
        } catch (e) {
            setError(`Server Error : ${e.message} ${e.stack}`);
        }

    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>TNL ID</th>
                        <th>Email ID</th>
                        <th>Name</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => {
                        const { email_id, name, tnl_id, department } = employee;
                        return (
                            <tr key={tnl_id}>
                                <td >{tnl_id}</td>
                                <td>{email_id}</td>
                                <td>{name}</td>
                                <td>{department}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default Employees;
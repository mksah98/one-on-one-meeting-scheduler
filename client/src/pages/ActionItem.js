import axios from 'axios';
import { useState, useEffect } from 'react';

import { Table } from 'react-bootstrap';

function ActionItem() {
    const [ActionItem, setActionItem] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getActionItem();
    }, [])

    const getActionItem = async () => {
        try {
            const response = await axios('http://localhost:4000/action-items/list');
            console.log(response.data);
            setActionItem(response.data.actionItems);
        } catch (e) {
            setError(`Server Error : ${e.message} ${e.stack}`);
        }

    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>action_item_id</th>
                        <th>Email Id</th>
                        <th>action_item</th>
                        <th>created_at</th>
                        <th>created_by</th>
                    </tr>
                </thead>
                <tbody>
                    {ActionItem.map(employee => {
                        const { action_item_id, email_id,action_item, created_at,created_by  } = employee;
                        return (
                            <tr key={action_item_id}>
                                <td >{action_item_id}</td>
                                <td >{employee.email_id}</td>
                                <td>{action_item}</td>
                                <td>{created_at}</td>
                                <td>{created_by}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default ActionItem;
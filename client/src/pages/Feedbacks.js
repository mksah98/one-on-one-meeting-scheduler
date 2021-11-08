import axios from 'axios';
import { useState, useEffect } from 'react';

import { Table } from 'react-bootstrap';

function Feedbacks() {
    const [Feedbacks, setFeedbacks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFeedbacks();
    }, [])

    const getFeedbacks = async () => {
        try {
            const response = await axios('http://localhost:4000/feedbacks/list');
            console.log(response.data);
            setFeedbacks(response.data.feedbacks);
        } catch (e) {
            setError(`Server Error : ${e.message} ${e.stack}`);
        }

    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>feedback_id</th>
                        <th>email_id</th>
                        <th>feedback</th>
                        <th>created_at</th>
                        <th>created_by</th>
                    </tr>
                </thead>
                <tbody>
                    {Feedbacks.map(employee => {
                        const { feedback_id, email_id, feedback,created_at ,created_by } = employee;
                        return (
                            <tr key={feedback_id}>
                                <td >{feedback_id}</td>
                                <td >{email_id}</td>
                                <td>{feedback}</td>
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

export default Feedbacks;
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Table } from 'react-bootstrap';

function Meetings() {
    const [Meetings, setMeetings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMeetings();
    }, [])

    const getMeetings = async () => {
        try {
            const response = await axios('http://localhost:4000/meetings/list');
            console.log(response.data);
            setMeetings(response.data.meetings);
        } catch (e) {
            setError(`Server Error : ${e.message} ${e.stack}`);
        }

    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>meeting_id</th>
                        <th>created_at</th>
                        <th>created_by</th>
                        <th>scheduled_at</th>
                        <th>scheduled_by</th>
                    </tr>
                </thead>
                <tbody>
                    {Meetings.map(employee => {
                        const { meeting_id, created_at,created_by, scheduled_at,scheduled_by  } = employee;
                        return (
                            <tr key={meeting_id}>
                                <td >{meeting_id}</td>
                                <td >{created_at}</td>
                                <td>{created_by}</td>
                                <td>{scheduled_at}</td>
                                <td>{scheduled_by}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default Meetings;
import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Button, Card, Row, Col } from 'react-bootstrap'

export const Users = () => {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4000/users')
            .then((res) => setUsers(res.data.data))
            .catch((err) => console.log("[ERROR] : ", err))
    })



    return (
        <Container>
            <h1>Users</h1>
            <Row>
                {/* Notice how we are using the Object.map method to iterate over each of the users */}
                {/* Don't forget teh index and key for optimizing the iteration */}

                {Users.map((user, index) => (
                    <Col md={3} key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={user.avatar} />
                            <Card.Body>
                                <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                                <Card.Text>
                                    {user.email}
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}

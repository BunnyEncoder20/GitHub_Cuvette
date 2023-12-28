import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Button, Card, Row, Col } from 'react-bootstrap'

export const Users = () => {
    const [Users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        avatar: ''
    })

    useEffect(() => {
        axios
            .get('http://localhost:4000/users')
            .then((res) => setUsers(res.data.data))
            .catch((err) => console.log("[ERROR] : ", err))
    })

    const handleSubmit = () => {
        axios
            .post('http://localhost:4000/users' , newUser)          // notice that we are using a post call here and sending the data in the 2nd param
            .then(() => {
                    console.log("User added Successfully !")

                    // clearing the form : 
                    setNewUser({
                        first_name: '',
                        last_name: '',
                        email: '',
                        avatar: ''
                    })
                }
            )
            .catch((err) => console.log("[ERROR] : ", err))
            
    }


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
            <Row>
                <Col>
                    <h3>Add a new User</h3>
                    <input type="text" placeholder='First Name' value={newUser.first_name} onInput={(e) => { setNewUser({ ...newUser, first_name: e.target.value }) }} /> <br /><br />
                    <input type="text" placeholder='Last Name' value={newUser.last_name} onInput={(e) => { setNewUser({ ...newUser, last_name: e.target.value }) }} /> <br /><br />
                    <input type="text" placeholder='Email' value={newUser.email} onInput={(e) => { setNewUser({ ...newUser, email: e.target.value }) }} /> <br /><br />
                    <input type="text" placeholder='Avatar URL' value={newUser.avatar} onInput={(e) => { setNewUser({ ...newUser, avatar: e.target.value }) }} /> <br /><br />
                    
                    <Button variant="dark" onClick={handleSubmit}>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}

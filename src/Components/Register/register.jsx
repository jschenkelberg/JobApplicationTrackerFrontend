import React, {useState} from 'react';  
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import './Register.css';


const Register = () => {
    const initialUserInfo = {
        FirstName: "",
        LastName: "",
        Email: "",
        UserName: "",
        Password: "",
        PhoneNumber: ""
    }
    const [eachEntry, setEachEntry] = useState(initialUserInfo)

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp();
        
    }

    const handleChange = (event) => {
        setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
      };

    const signUp = async () => {
        let userData = eachEntry;
        let response = await axios.post("https://localhost:44394/api/authentication", userData);
        console.log(response)
        window.location.href="/login"

    }
    return (
        
        <Container>
            <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
                <div className="register">
                    <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <input name="FirstName" placeholder="First name..." onChange={handleChange}></input>
                            <br></br>
                            <input  name="LastName" placeholder="Last name..." onChange={handleChange}></input>
                            <br></br>
                            <input  name="Email" placeholder="Email..." onChange={handleChange}></input>
                            <br></br>
                            <input  name="UserName" placeholder="Username..." onChange={handleChange}></input>
                            <br></br>
                            <input  name="Password" placeholder="Password..." onChange={handleChange} type="password" ></input>
                            <br></br>
                            <input  name="PhoneNumber" placeholder=" Phone Number(Optional)" onChange={handleChange}></input>
                            <br></br>
                            <button style={{backgroundColor: "red", borderColor: "white", color: "white"}} className="mt-2 mb-2">Register</button>
                        </form>
                    </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    )
}

export default Register;
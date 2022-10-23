import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false)

  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please Verify Your Email Address.")
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };



  const handleUpdateUserProfile = (name, photoURL) =>{
    const profile = {
      displayName: name,
      photoURL: photoURL,
    }
    updateUserProfile(profile)
    .then(() =>{})
    .catch(error => console.error(error))
  }


  const handleEmailVerification = () =>{
    verifyEmail()
    .then(() =>{})
    .catch(error => console.error(error))
  } 

  const handleAccepted = (event) =>{
    setAccepted(event.target.checked);
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="text"
          name="photoURL"
          placeholder="Enter Photo URL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          type="checkbox" 
          onClick={handleAccepted}
          label={<>Accept <Link to="/terms">Terms & Conditions</Link></>} />
        </Form.Group>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;

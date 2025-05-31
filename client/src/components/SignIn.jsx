import { Component } from 'react'
import { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, FormText, Modal, Button } from "react-bootstrap"
import api from '../api/api'

// this is my sign in modal for the access to admin page.
function SignInModal() {

  const [inputs, setInputs] = useState({})
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const id = event.target.id
    const value = event.target.value
    setInputs(values => ({ ...values, [id]: value }))
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logIn = () => {
    console.log(inputs);

    api.login(inputs).then(data => {
      if (data.data.message) {
        setMessage(data.data.message)
      } else {
        localStorage.setItem('user', inputs.email)
        location.assign('/adminInfo')
      }
    })
  }

  return (
    <>
      {/* this is my icon for my admin page */}
      <button className='btn-transparent border-0' onClick={handleShow}> <i className="text-danger fa fa-pizza-slice mr-1 mb-1 icons"></i></button>
      {/* this is the sign in modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header> <Modal.Title className="text-success fontOne">Sign In</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" id='email' onChange={(event) => handleChange(event)} required />
            </Form.Group>
            {message ? <h3 className="text-danger">{message}</h3> : null}
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" min="4" id='password' onChange={(event) => handleChange(event)} required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit" onClick={logIn}>
            Submit
        </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignInModal; 
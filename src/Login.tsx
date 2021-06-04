import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export type AuthProps = {
    setUsername:  any,
    setPassword: any,
    loginSubmit: any,
    message: string
}

const Login = ({setUsername, setPassword, message, loginSubmit}: AuthProps) => {

  return <div>
      <div className="app-header"><h2>Login</h2></div>
      <div className="app-body">
        <Form>
            <Form.Group  controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            </Form.Group>
            <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            <Button block size="lg" type="click" onClick={loginSubmit}>
                Login
            </Button>
            <div>{message}</div>
        </Form>
    </div>
  </div>
}

export default Login
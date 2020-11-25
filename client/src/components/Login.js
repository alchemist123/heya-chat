import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import './Input.css'
import './title.css'
import './button.css'
import './heya.css'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  return (
    <Container className="align-items-center d-flex border-sm" style={{height: '100vh', width :'30hv',padding: '80px',background: "linear-gradient(  #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)" }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label className="instagram">Heya Let's Talk !</Form.Label>
          <Form.Control className="field" type="text" ref={idRef} required placeholder="create your own Id" />
        </Form.Group>   
        <Button type="submit" className="glow-on-hover">Login</Button> &nbsp;
        <Button onClick={createNewId} className="glow-on-hover">Create A New Id</Button>
      </Form>
    </Container>
    
  )
}
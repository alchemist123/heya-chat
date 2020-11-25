import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../Contexts/ContantsProvider'

export default function NewContactModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()
  const { createContact } = useContacts()

  function handleSubmit(e) {
    e.preventDefault()

    createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton style={{fontStyle:"italic"}}>Create Contact</Modal.Header>
      <Modal.Body style={{background:"black"}}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label style={{color:"white",opacity:"90%"}}>Id</Form.Label>
            <Form.Control type="text" className="field" placeholder="Friends secret Id" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{color:"white",opacity:"90%"}}>Name</Form.Label>
            <Form.Control type="text" className="field" placeholder="Nike Name" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" className="glow-on-hover">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
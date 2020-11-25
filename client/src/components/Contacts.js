import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../Contexts/ContantsProvider';
import './heya.css'
export default function Contacts() {
  const { contacts } = useContacts()

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id} className="glow-on">
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
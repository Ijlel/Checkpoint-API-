import React from 'react'
import Card from 'react-bootstrap/Card'

const UserCard = ({user}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Name : {user.name}</Card.Title>
        <Card.Text>User Name : {user.username}</Card.Text>
        <Card.Text>Mail {user.email}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserCard
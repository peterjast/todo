import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useForm from '../../hooks/form.js';

function TodoForm(props) {

  const [_handleSubmit, handleInputChange] = useForm(props.handleSubmit);

  return (
    <>
      <Card>
        <Card.Title className="px-2 mx-4 mt-4 mb-0">Add To Do Item</Card.Title>
          <Card.Body>
            <Form onSubmit={_handleSubmit} className="mx-auto px-3">
              <Form.Group>
                <Form.Label className="my-0">To Do Item</Form.Label>
                <Form.Control name="text" type="text" placeholder="Item Details" onChange={handleInputChange} />
                <Form.Label className="mb-0 mt-2">Assigned To</Form.Label>
                <Form.Control name="assignee" type="text" placeholder="Assignee Name" onChange={handleInputChange} />
                <Form.Label className="mb-0 mt-2">Difficulty</Form.Label>
                <input className="mb-4 w-100" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
              </Form.Group>
              <Row>
                <Col xs={5}>
                  <Button className="w-100 py-2 mt-0mb-2" type="submit">Add Item</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;
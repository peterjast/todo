import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TodoForm(props) {

  const [item, setItem] = useState({});

  const _handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value});
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

  return (
    <>
      <Card>
      <Card.Title className="px-2 mx-4 mt-4 mb-0">Add To Do Item</Card.Title>
        <Card.Body>
          <Form onSubmit={_handleSubmit} className="mx-auto px-3">
            <Form.Group>
              <Form.Label className="mb-1 mt-0">To Do Item</Form.Label>
              <Form.Control name="text" type="text" placeholder="Item Details" onChange={_handleInputChange} />
              <br />
              <Form.Label className="mb-1 mt-0">Assigned To</Form.Label>
              <Form.Control name="assignee" type="text" placeholder="Assignee Name" onChange={_handleInputChange} />
              <br />
              <input className="mb-4 w-100" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
              <br />
            </Form.Group>
            <Row>
              <Col xs={5}>
                <Button className="w-100 py-2 mb-2" type="submit">Add Item</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;
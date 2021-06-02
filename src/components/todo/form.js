import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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
      <Card.Title className="mx-3 mt-3 mb-0">Add To Do Item</Card.Title>
        <Card.Body>
          <Form onSubmit={_handleSubmit} className="mx-auto">
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
            <Button className="w-50" type="submit">Add Item</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;
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
      <Card.Title className="mx-3 mt-4">Add To Do Item</Card.Title>
        <Card.Body>
          <Form onSubmit={_handleSubmit} className="mx-auto">
            <label>
              <span>To Do Item</span>
              <input
                name="text"
                placeholder="Item Details"
                onChange={_handleInputChange}
              />
            </label>
            <label>
              <span>Assigned To</span>
              <input type="text" name="assignee" placeholder="Assignee Name" onChange={_handleInputChange} />
            </label>
            <label>
              <span>Difficulty</span>
              <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
            </label>
            <Button type="submit">Add Item</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;
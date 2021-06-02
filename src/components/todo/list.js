import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function TodoList(props) {
  return (
    <Card style={{ width: '32rem' }}>
      <ListGroup variant="flush">
        <>
        {props.list.map(item => (
          <ListGroup.Item variant={item.complete ? "danger" : "success"} className={`complete-${item.complete.toString()} py-3`} key={item._id} onClick={() => props.handleComplete(item._id)}>
            {item.complete ? `${item.text} ✅` : item.text} 
          </ListGroup.Item>
        ))}
        </>
      </ListGroup>
    </Card>
  );
}

export default TodoList;

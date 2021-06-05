import React, { useContext, useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { If, Then } from 'react-if';

import { SettingsContext } from '../../context/settings.js';

function TodoList(props) {
  const context = useContext(SettingsContext);
  const [start, setStart] = useState(0);

  let sortedList = props.list;

  if(!context.showCompleted){
    sortedList = sortedList.filter(item => !item.complete);
  }

  switch(context.sortBy){
    case 'Latest':
      sortedList = sortedList.sort((a, b) => (a.due < b.due) ? 1: -1);
      break;
      case 'Oldest':
        sortedList = sortedList.sort((a, b) => (a.due > b.due) ? 1: -1);
        break;
    case 'Easiest':
        sortedList = sortedList.sort((a, b) => (a.difficulty > b.difficulty) ? 1: -1);
      break;
    case 'Hardest':
        sortedList = sortedList.sort((a, b) => (a.difficulty < b.difficulty) ? 1: -1);
      break;
    default:
      sortedList = props.list;
  }

  let displayList = sortedList.length - start < context.itemsPerPage ? sortedList.slice(start) : sortedList.slice(start, start + context.itemsPerPage);

  function next() {
    setStart(start + context.itemsPerPage);
  }

  function previous() {
    setStart(start - context.itemsPerPage);
  }

  return (
    <Container>
      {displayList.map(item => (
        <Card className="mb-4" style={{ width: '30rem' }} key={item._id}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Badge pill bg={item.complete ? "danger" : "success"} className={`complete-${item.complete.toString()}`} key={item._id} onClick={() => props.handleComplete(item._id)}>
                {item.complete ? "Complete" : " Pending "}
              </Badge>
              <b className="item-asignee">{item.assignee}</b>
              <b className="close" aria-label="Close" onClick={() => props.handleDelete(item._id)}>&times;</b>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="item-text">{item.text}</p>
              <p className="item-difficulty">{`Difficulty: ${item.difficulty}`}</p>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
      <Row>
        <Col>
          <If condition={start > 0}>
            <Then>
              <Button className="mx-1" onClick={previous}>Previous</Button>
            </Then>
          </If>
        </Col>
        <Col>
          <If condition={start+context.itemsPerPage < sortedList.length}>
            <Then>
              {`${start +1}-${start+context.itemsPerPage} of ${sortedList.length}`}
            </Then>
          </If>
        </Col>
        <Col>
          <If condition={start + context.itemsPerPage < sortedList.length}>
            <Then>
              <Button className="" onClick={next}>Next</Button>
            </Then>
          </If>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;

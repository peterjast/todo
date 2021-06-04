import React, { useContext, useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { If, Then } from 'react-if';

import { SettingsContext } from '../../context/settings.js';

function TodoList(props) {
  const context = useContext(SettingsContext);
  const [start, setStart] = useState(0);

  let sortedList = props.list;

  switch(context.sortBy){
    case 'Latest':
      sortedList = props.list.sort((a, b) => (a.due < b.due) ? 1: -1);
      break;
      case 'Oldest':
        sortedList = props.list.sort((a, b) => (a.due > b.due) ? 1: -1);
        break;
    case 'Easiest':
      sortedList = props.list.sort((a, b) => (a.difficulty > b.difficulty) ? 1: -1);
      break;
    case 'Hardest':
      sortedList = props.list.sort((a, b) => (a.difficulty < b.difficulty) ? 1: -1);
      break;
    default:
      sortedList = props.list;
  }

  if(!context.showCompleted){
    let pending = sortedList.filter(item => !item.complete);
    sortedList = pending;
  }

  let displayList = sortedList;

  if(props.list.length > context.itemsPerPage){
    displayList = sortedList.slice(start, start + context.itemsPerPage);
  };
  
  useEffect(() => {
    if(props.list.length - start < context.itemsPerPage){
      displayList = sortedList.slice(start);
    } else {
      displayList = sortedList.slice(start, start + context.itemsPerPage)
    }
  }, [start]);

  function next() {
    setStart(start + context.itemsPerPage);
  }

  function previous() {
    setStart(start - context.itemsPerPage);
  }

  return (
    <>
    {displayList.map(item => (
      <Card className="mb-4" style={{ width: '28rem' }} key={item._id}>
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
    <If condition={start > 0}>
      <Then>
        <Button onClick={previous}>Previous</Button>
      </Then>
    </If>
    <If condition={start + context.itemsPerPage < sortedList.length}>
      <Then>
        <Button onClick={next}>Next</Button>
      </Then>
    </If>
    </>
  );
}

export default TodoList;

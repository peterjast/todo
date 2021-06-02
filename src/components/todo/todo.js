import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

import './todo.scss';

function ToDo(props) {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      setList(list.map(listItem => listItem._id === item._id ? item : listItem));
    }

  };

  useEffect(() => {
    setList([
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ]);
  }, []);

  useEffect(() => {
    document.title = `To-Do: ${list.filter(item => !item.complete).length} Completed: ${list.filter(item => item.complete).length}`
  }, [list]);

  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Item>
                <Nav.Link href="/home" className="mx-5">Home</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </header>

      <section className="todo">
        <Container>
          <Row>
            <Col>
            <Navbar bg="dark" variant="dark" className="my-4">
              <Navbar.Brand className="mx-3">
                To Do List Manager({list.filter(item => !item.complete).length})
              </Navbar.Brand>
            </Navbar>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <TodoForm handleSubmit={_addItem} />
            </Col>
            <Col className="mx-5">
              <TodoList
                list={list}
                handleComplete={_toggleComplete}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ToDo;
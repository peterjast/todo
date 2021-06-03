import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import useAjax from '../../hooks/ajax.js';

import '../../styles/todo.scss';

const ToDo = () => {

  const [addItem, toggleComplete, getTodoItems, deleteItem, list] = useAjax();

  useEffect(getTodoItems, []);

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
          <Row className="mt-3">
            <Col xs={4}>
              <TodoForm handleSubmit={addItem} />
            </Col>
            <Col className="mx-5">
              <TodoList
                list={list}
                handleComplete={toggleComplete}
                handleDelete={deleteItem}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ToDo;
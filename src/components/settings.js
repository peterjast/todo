import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../styles/settings.scss';

import { SettingsContext } from '../context/settings.js';

const Settings = () => {

  const context = useContext(SettingsContext);
  // const [sortSelection, setSortSelection] = useState('Easiest');
  // const [itemsSelection, setItemsSelection] = useState(1);
  // const [completedSelection, setCompletedSelection] = useState(true);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(sortSelection, itemsSelection, completedSelection);
  //   sort(sortSelection);
  //   item(itemsSelection);
  //   show(completedSelection);
  // }

  // const changeComplete = (e) => {
  //   setCompletedSelection(e.target.value);
  // }

  // const changeSort = (e) => {
  //   setSortSelection(e.target.value);
  // }

  // const changeItems = (e) => {
  //   setItemsSelection(e.target.value);
  // }

  return (
    <>
      <Container className="mx-auto mt-5">
        <Form>
          <Form.Group>
            <Form.Label className="mb-0">Items per Page</Form.Label>
            <Form.Control as="select" onChange={e => context.setItem(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>  
            <Form.Label className="mt-2 mb-0">Sort By</Form.Label>
            <Form.Control as="select" onChange={e => context.setSort(e.target.value)}>
              <option value="Easiest">Easiest</option>
              <option value="Hardest">Hardest</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>  
            <Form.Label className="mt-2 mb-0">Completed Items</Form.Label>
            <Form.Control as="select" onChange={e => context.setShow(e.target.value)}>
              <option value="true">show</option>
              <option value="false">hide</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default Settings;
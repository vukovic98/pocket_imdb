import React from 'react';
import { Form } from 'react-bootstrap';

export default function Filter() {
    return(
        <Form className='col-md-6 fl-right pl-0'>
            <Form.Group>
              <Form.Label>Filter Movie By Genre</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
    );
}
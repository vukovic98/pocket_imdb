import React from 'react';
import { Form } from 'react-bootstrap';

export default function Search() {
    return(
        <Form className='col-md-6 fl-left pr-3 pl-0'>
            <Form.Group>
              <Form.Label>Search Movie By Name</Form.Label>
              <Form.Control type="email" placeholder="eg. Terminator" />
            </Form.Group>
          </Form>
    );
}
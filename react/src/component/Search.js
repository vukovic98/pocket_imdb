import React from 'react';
import { Form } from 'react-bootstrap';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({searchMovieByTitle}) {

    

    const onChange = (title) => {
      searchMovieByTitle(title);
    }

    const debounced = useDebouncedCallback(onChange, 750);


    return(
        <Form className='col-md-6 fl-left pr-3 pl-0'>
            <Form.Group>
              <Form.Label>Search Movie By Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="eg. Terminator" 
                onChange={(e) => debounced.callback(e.target.value)}
              />
            </Form.Group>
          </Form>
    );
}
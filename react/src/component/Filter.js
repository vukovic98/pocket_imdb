import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

export default function Filter({genres, filterMoviesByGenre}) {
    const [selectedGenre, setGenre] = useState('-1');

    useEffect(() => {
      filterMoviesByGenre(selectedGenre);
    },[selectedGenre]);

    return(
        <Form className='col-md-6 fl-right pl-0'>
            <Form.Group>
              <Form.Label>Filter Movie By Genre</Form.Label>
              <Form.Control 
                as="select"
                onChange={(e) => {setGenre(e.target.value)}}
              >
                <option key={-1} value={-1} >All</option>
                {genres.map(genre => {
                  return <option key={genre.id} value={genre.id}>{genre.name}</option>
                })}
              </Form.Control>
            </Form.Group>
          </Form>
    );
}
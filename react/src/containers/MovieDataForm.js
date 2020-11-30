import React from 'react';
import { Form, Col, Button} from 'react-bootstrap';
import { useFormik} from 'formik';
import {useSelector} from 'react-redux';
import {validationSchema, initialValues} from '../validation/movieValidation';
import { genreSelector } from '../store/selectors/MovieSelector';


export default function MovieDataForm({movie, action, title, onTitleEnter}) {

    const genres = useSelector(genreSelector());
    
    const formik = useFormik({
        initialValues: initialValues({id: movie.id, title: movie.title, description: movie.description,
             image: movie.image, genre: movie.genre, times_viewed: movie.times_viewed, comments: movie.comments}),
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: values => {
            action(values);
        }
    });

  
    return (
      <>
          <Form>
            <Form.Row className="text-left">
                <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    required
                    id="title"
                    onBlur={(e) => onTitleEnter(e.target.value)}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    />
                {formik.touched.title && formik.errors.title ? (
                        <div style={{'color':'red'}}>*{formik.errors.title}</div>
                    ) : null}
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                <Form.Label className='mr-1'>Description</Form.Label>
                <textarea
                    type="text" 
                    required
                    rows='5'
                    style={{'width': '100%', 'resize':'none'}}
                    id="description"
                    {...formik.getFieldProps('description')}
                />
                {formik.touched.description && formik.errors.description ? (
                        <div style={{'color':'red'}}>*{formik.errors.description}</div>
                    ) : null}
                </Form.Group>
            </Form.Row>
            <Form.Row  className="text-left">
                <Form.Group as={Col}>
                <Form.Label>Image</Form.Label>
                <Form.Control 
                    type="text" 
                    required
                    id="image"
                    {...formik.getFieldProps('image')}
                />
                {formik.touched.image && formik.errors.image ? (
                        <div style={{'color':'red'}}>*{formik.errors.image}</div>
                    ) : null}
                </Form.Group>
            </Form.Row>
            
            <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Genre</Form.Label>
                <Form.Control 
                    as="select"
                    value={movie.genre}
                    {...formik.getFieldProps('genre')}
                >
                    <option key={-1} value={-1}>Choose genre</option>
                    {genres.map(genre => {
                    return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })}
                </Form.Control>
                {formik.touched.genre && formik.errors.genre ? (
                        <div style={{'color':'red'}}>*{formik.errors.genre}</div>
                    ) : null}
                </Form.Group>
                
            </Form.Row>
            <Button
                style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}} 
                size="lg" 
                type="submit"
                onClick={formik.handleSubmit} 
                className="mt-3"
                block 
            >
                {title}
            </Button>
          </Form>
      </>
    );
  }
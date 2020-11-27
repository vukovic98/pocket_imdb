import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Col} from 'react-bootstrap';
import {useFormik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../component/Loader';
import {validationSchema, initialValues} from '../config/movieValidation';
import { genreSelector, movieSelector } from '../store/selectors/MovieSelector';
import { editMovie } from '../store/actions/MovieActions';
import { userSelector } from '../store/selectors/UserSelector';


export default function EditMovieModal() {
    const [show, setShow] = useState(false);
    const movie = useSelector(movieSelector());

    const genres = useSelector(genreSelector());
    
    const dispatch = useDispatch();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const formik = useFormik({
        initialValues: initialValues({id: movie.id, title: movie.title, description: movie.description,
             image: movie.image, genre: movie.genre, times_viewed: movie.times_viewed, comments: movie.comments}),
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(editMovie(values));
            handleClose();
        },
    });
  
    return (
      <>
        <button className="float-right m-1" onClick={handleShow}>
          <i className='fas fa-edit'></i>Edit Movie
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Loader isLoading={!movie}>{ () =>
          <Form>
            <Form.Row className="text-left">
                <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    required
                    id="title"
                    {...formik.getFieldProps('title')}
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
            
          </Form>}
          </Loader>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={formik.handleSubmit} >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
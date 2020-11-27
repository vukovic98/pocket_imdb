import React, { useEffect } from 'react';
import { Col, Jumbotron, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { createMovie, getGenres } from '../store/actions/MovieActions';
import { genreSelector } from '../store/selectors/MovieSelector';
import {validationSchema, initialValues} from '../config/movieValidation';
import { userSelector } from '../store/selectors/UserSelector';

export default function CreateMovie() {

    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(userSelector());

    useEffect(() => {
        dispatch(getGenres());
      },[]);

    const genres = useSelector(genreSelector());

    const formik = useFormik({
        initialValues: initialValues({id: '', title: '', description: '', image: '', genre: '', times_viewed: 0, comments: [], user_id: user.id}),
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(createMovie(values));
        },
    });

    return(
        <div>
            <div>
                <button className='m-1' onClick={history.goBack}><i className="far fa-arrow-left"></i>  Back</button>
            </div>
            <div>
                <Jumbotron as={Col} className="col-md-10 bg-light ml-auto mr-auto mt-3 pt-4">
                <Form 
                    as={Col} 
                    className="mr-auto ml-auto  shadow-lg pl-5 pr-5 rounded pt-2 pb-4" 
                    style={{'backgroundColor':'rgb(245,247,248)'}}
                >
                        <h3 className="text-left mb-4">Create New Movie</h3>
                        <Form.Row className="text-left">
                            <Form.Group as={Col}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="Enter Title" 
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
                                placeholder="Enter Description" 
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
                                placeholder="Enter Image URL" 
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
                            Add Movie
                        </Button>
                </Form>
                </Jumbotron>
            </div>
        </div>
    );
}
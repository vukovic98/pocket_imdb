import { Form, Col } from 'react-bootstrap';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {addComment} from '../store/actions/MovieActions';

export default function AddComment({user, movie}) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            content: '',
            user: user.id,
            movie: movie.id
        },
        validationSchema: Yup.object({
            content: Yup.string()
            .required('Required')
            .max(500, "Comment can't be longer then 500 characters!"),
            user: Yup.number()
            .required('Required'),
            movie: Yup.number()
            .required('Required')
        }),
        onSubmit: values => {
            dispatch(addComment(values));
            formik.handleReset();
        },
    });

    return(
        <div>
            <Form className="col-md-12 pl-0 pr-0 mt-3">
                <Form.Row>
                    <Form.Group as={Col} className="col-md-11">
                        <Form.Control
                            type="text" 
                            placeholder="Insert Comment ..."
                            required
                            id="content"
                            { ...formik.getFieldProps("content") }
                        />
                    </Form.Group>

                    <Form.Group className="col-md-1">
                        <button 
                            type="submit"
                            className="btn btn-outline-primary float-right" 
                            onClick={formik.handleSubmit}
                        >Add</button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
}
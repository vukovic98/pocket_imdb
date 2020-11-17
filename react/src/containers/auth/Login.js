import React from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {logIn} from '../../store/actions/AuthActions';

export default function Login() {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .required('Required'),
            password: Yup.string()
            .required('Required')
        }),
        onSubmit: values => {
            dispatch(logIn(values));
        },
    });

    return(
        <div className="Login">
            <Form as={Col} className="col-md-4 mr-auto ml-auto mt-5 shadow-lg pl-5 pr-5 rounded pt-5 pb-5" style={{'backgroundColor':'rgb(245,247,248)'}}>
    <h3 className="text-left mb-4">Log In</h3>
                        
                        <Form.Row  className="text-left">
                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="email"
                                    placeholder="Enter email" 
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div style={{'color':'red'}}>*{formik.errors.email}</div>
                                ) : null}
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="text-left">
                            <Form.Group as={Col}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter Password" 
                                    id="password"
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div style={{'color':'red'}}>*{formik.errors.password}</div>
                                ) : null}
                            </Form.Group>
                        </Form.Row>

                    

                        <Button onClick={formik.handleSubmit} type="submit" style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}} block  className="mt-4">
                            Sign In
                        </Button>
                </Form>
                <div className="mt-2 text-center">
                    <span style={{'color':'rgb(152,188,227)'}}>Don't have an account?   </span>
                    <Link to={'register'}><span className="text-blue">Sign Up!</span></Link>
                </div>
        </div>
    );
}

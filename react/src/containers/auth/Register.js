import React from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {register} from '../../store/actions/AuthActions';

export default function Register() {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            image: ''
        },
        validationSchema: Yup.object({
            image: Yup.string()
            .required('Required'),
            password: Yup.string()
            .required('Required'),
            first_name: Yup.string()
            .max(20, 'First name must contain 20 letters at most')
            .required('Required'),
            last_name: Yup.string()
            .max(20, 'Last name must contain 20 letters at most')
            .required('Required'),
            username: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            console.log(values);
            dispatch(register(values));
        },
    });

    return(
        <div className="Signup" >
                <Form 
                    as={Col} 
                    className="col-md-4 mr-auto ml-auto mt-4 shadow-lg pl-5 pr-5 rounded pt-5 pb-4" 
                    style={{'backgroundColor':'rgb(245,247,248)'}}
                >
                        <h3 className="text-left mb-4">Create Your Account</h3>
                        <Form.Row className="text-left">
                            <Form.Group as={Col}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="Enter First Name" 
                                id="first_name"
                                {...formik.getFieldProps('first_name')}
                                />
                            {formik.touched.first_name && formik.errors.first_name ? (
                                    <div style={{'color':'red'}}>*{formik.errors.first_name}</div>
                                ) : null}
                            </Form.Group>
                            <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                placeholder="Enter Last Name" 
                                id="last_name"
                                {...formik.getFieldProps('last_name')}
                            />
                            {formik.touched.last_name && formik.errors.last_name ? (
                                    <div style={{'color':'red'}}>*{formik.errors.last_name}</div>
                                ) : null}
                            </Form.Group>
                        </Form.Row>
                        <Form.Row  className="text-left">
                            <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                required
                                placeholder="Enter email" 
                                id="username"
                                {...formik.getFieldProps('username')}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                    <div style={{'color':'red'}}>*{formik.errors.username}</div>
                                ) : null}
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="text-left">
                            <Form.Group as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter Password" 
                                required
                                id="password"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                    <div style={{'color':'red'}}>*{formik.errors.password}</div>
                                ) : null}
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group>
                            <Form.File 
                              id="image" 
                              label="Choose image" 
                              required
                              {...formik.getFieldProps('image')}
                            />
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
                            Sign Up
                        </Button>
                </Form>
                <div className="mt-1 text-center">
                    <span style={{'color':'rgb(152,188,227)'}}>Have an account?   </span>
                    <Link to={'login'}><span className="text-blue">Sign In!</span></Link>
                </div>
        </div>
    );
}
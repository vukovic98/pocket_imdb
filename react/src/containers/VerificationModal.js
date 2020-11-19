import React from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {verify} from '../store/actions/AuthActions';

export default function VerificationModal() {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            code: '',
            username: ''
        },
        validationSchema: Yup.object({
            code: Yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(6, 'Must be exactly 6 digits')
            .max(6, 'Must be exactly 6 digits')
            .required('Code is not valid'),
            username: Yup.string()
            .required('Required')
            .email('Not a valid form of email')
        }),
        onSubmit: values => {
            dispatch(verify(values));
        },
    });

    return(
        <div className="VerificationModal">
            <Form as={Col} className="col-md-4 mr-auto ml-auto mt-5 shadow-lg pl-5 pr-5 rounded pt-5 pb-5" style={{'backgroundColor':'rgb(245,247,248)'}}>
                <h3 className="text-center mb-4">User Verification</h3>
                        
                        <Form.Row  className="text-left">
                            <div className="text-center mb-5 text-muted">
                            We've sent you an email. Please verify your identity before continuing.
                            </div>
                        </Form.Row>
                        <Form.Row className="text-left">
                            <Form.Group as={Col}>
                                <Form.Control 
                                    type="email" 
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
                                <Form.Control 
                                    type="number" 
                                    placeholder="Enter Code" 
                                    id="code"
                                    {...formik.getFieldProps('code')}
                                />
                                {formik.touched.code && formik.errors.code ? (
                                    <div style={{'color':'red'}}>*{formik.errors.code}</div>
                                ) : null}
                            </Form.Group>
                        </Form.Row>

                    

                        <Button onClick={formik.handleSubmit} type="submit" style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}} block  className="mt-4">
                            Continue
                        </Button>
                </Form>
        </div>
    );
}

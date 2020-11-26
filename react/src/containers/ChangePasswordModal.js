import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {changePassword} from '../store/actions/UserActions';
import { userSelector } from '../store/selectors/UserSelector';

export default function ChangePasswordModal() {
    const [show, setShow] = useState(false);
    const user = useSelector(userSelector());
    
    const dispatch = useDispatch();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const formik = useFormik({
        initialValues: {
            id: user.id,
            password: '',
            repeat: ''
        },
        validationSchema: Yup.object({
            password: Yup.string()
            .min(7, 'Password must contain at least 7 characters')
            .required('Required'),
            repeat: Yup.string()
            .required('Required')
            .test('passwords-match', "Passwords don't match!", function(value) {
                return this.parent.password === value;
              }),
        }),
        onSubmit: values => {
            dispatch(changePassword(values));
        },
    });
  
    return (
      <>
        <Button className="float-left" variant="primary" onClick={handleShow} style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}}>
          Change Password
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Insert Password..." 
                    required
                    id="password"
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                                    <div style={{'color':'red'}}>*{formik.errors.password}</div>
                                ) : null}
            </Form.Group>
            <Form.Group>
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Repeat Password..." 
                    required
                    id="repeat"
                    {...formik.getFieldProps('repeat')}
                />
                {formik.touched.repeat && formik.errors.repeat ? (
                                    <div style={{'color':'red'}}>*{formik.errors.repeat}</div>
                                ) : null}
            </Form.Group>
            
          </Form>
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
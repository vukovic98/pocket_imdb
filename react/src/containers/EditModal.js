import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {editUser} from '../store/actions/UserActions';

export default function EditModal() {
    const [show, setShow] = useState(false);
    const user = useSelector(state => state.userReducer.userData.data);
    
    const dispatch = useDispatch();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const formik = useFormik({
        initialValues: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            password: user.password,
            image: undefined
        },
        validationSchema: Yup.object({
            image: Yup.string(),
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
            dispatch(editUser(values));
        },
    });
  
    return (
      <>
        <Button className="float-right" variant="primary" onClick={handleShow} style={{'backgroundColor':'rgb(86,140,199)', 'borderColor':'rgb(86,140,199)'}}>
          Edit profile
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Insert First Name..." 
                    required
                    id="first_name"
                    {...formik.getFieldProps('first_name')}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                                    <div style={{'color':'red'}}>*{formik.errors.first_name}</div>
                                ) : null}
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Insert Last Name..." 
                    required
                    id="last_name"
                    {...formik.getFieldProps('last_name')}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                                    <div style={{'color':'red'}}>*{formik.errors.last_name}</div>
                                ) : null}
            </Form.Group>
            <Form.Group>
                <Form.File 
                    id="image" 
                    label="Choose image" 
                    required
                    onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                    }}
                />
                {formik.touched.image && formik.errors.image ? (
                                    <div style={{'color':'red'}}>*{formik.errors.image}</div>
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
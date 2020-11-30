import React, { useState} from 'react';
import {Modal } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../component/Loader';
import { movieSelector } from '../store/selectors/MovieSelector';
import { editMovie } from '../store/actions/MovieActions';
import MovieDataForm from './MovieDataForm';


export default function EditMovieModal() {
    const [show, setShow] = useState(false);
    const movie = useSelector(movieSelector());

    const dispatch = useDispatch();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (values) => {
      dispatch(editMovie(values));
      handleClose();
    }
  
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
            <Loader isLoading={!movie}>{ () => <MovieDataForm movie={movie} action={handleEdit} title={"Edit movie"}/> }
          </Loader>
          </Modal.Body>
        </Modal>
      </>
    );
  }
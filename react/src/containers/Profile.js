import React, {useEffect} from 'react';
import {Jumbotron, Card, Image, InputGroup, FormControl} from 'react-bootstrap';
import NavigationBar from '../component/NavigationBar';
import {useDispatch, useSelector} from 'react-redux';
import {loggedUserData} from '../store/actions/UserActions';
import config from '../config';
import EditModal from './EditModal';
import ChangePasswordModal from './ChangePasswordModal';
import {userSelector} from '../store/selectors/UserSelector';

export default function Profile() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loggedUserData());
    },[]);
    
    const user = useSelector(userSelector());
    
    return (
        <div>
            {!user ? (<div>Loading ... </div>)
            : ( <div><NavigationBar />
            <Jumbotron className="ml-auto mr-auto col-md-8 mt-3 bg-light">
                <Card>
                    <Card.Header className="text-center">

                    <Image src={config.API_BASE_URL + user.image} roundedCircle height='170' width='180'/>
                    </Card.Header>
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend  className="w-25">
                            <InputGroup.Text id="basic-addon1" className="w-100">First Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                disabled
                                placeholder="Username"
                                aria-label="Username"
                                className="bg-light"
                                aria-describedby="basic-addon1"
                                value={user.first_name}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend className="w-25">
                            <InputGroup.Text id="basic-addon1" className="w-100">Last Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                disabled
                                placeholder="Username"
                                aria-label="Username"
                                className="bg-light"
                                aria-describedby="basic-addon1"
                                value={user.last_name}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend className="w-25">
                            <InputGroup.Text id="basic-addon1" className="w-100">Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                disabled
                                className="bg-light"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={user.username}
                            />
                        </InputGroup>
                    </Card.Body>
                    <Card.Footer>
                        <ChangePasswordModal />
                        <EditModal />
                    </Card.Footer>
                </Card>
            </Jumbotron> </div>
            )}
        </div>
    );
}
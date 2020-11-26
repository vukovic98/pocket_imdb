import React from 'react';
import { Card } from 'react-bootstrap';

export default function Comment({user, content}) {
    return(
        <div>
            <Card>
                <Card.Body>
                    <span className="col-md-3 bg-light birder-right">
                        User {user} says
                    </span>
                    <span className='col-md-9'>
                        {content}
                    </span>
                    
                </Card.Body>
            </Card>
        </div>
    );
}
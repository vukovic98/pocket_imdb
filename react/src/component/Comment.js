import React from 'react';
import { Card } from 'react-bootstrap';

export default function Comment({data}) {
    return(
        <div>
            <Card>
                <Card.Body>
                    <span className="col-md-3 bg-light birder-right">
                        User {data.user} says
                    </span>
                    <span className='col-md-9'>
                        {data.content}
                    </span>
                    
                </Card.Body>
            </Card>
        </div>
    );
}
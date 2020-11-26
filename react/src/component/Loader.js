import React from 'react';

export default function Loader  ({ isLoading, children })  {
    
    return isLoading ? <p>Loading ...</p> : children();
}
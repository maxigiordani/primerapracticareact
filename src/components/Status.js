import React from 'react';
import { Alert } from 'react-bootstrap';

const Status = (classroom, enable) => {
    return (
        <div>
        { enable ?   <Alert key="info" >
          la comision {classroom} esta habilitada 
        </Alert>:null}  
        </div>
    );
};

export default Status;
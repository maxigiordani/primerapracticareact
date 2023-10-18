import React from 'react';
import Status from './Status';

const Heading = (classroom, enable) => {
    
    return (
        <div>
        <h1 className='display-4 text-center'> lista de tareas  {classroom}  </h1> 
        < Status classroom={classroom} enable={enable}>  </Status>
        </div>
    );
};

export default Heading;
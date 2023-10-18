import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Heading from './components/Heading';
import Subheading from './components/Subheading';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import FormTask from './components/FormTask';

function App() {
  const [enabled, setEnabled] = useState(false);  

  return (
    <>
       <Container>
          <Heading classroom='66i' enable={enabled} />  {/* Este es un props que le dara la informacion a los componentes hijos */}
          <Subheading></Subheading>
          <div className="text-center">
            <button className='btn btn-primary text-center' onClick={()=> setEnabled(!enabled)}>  {/* este es un estado */}
              {enabled ? 'Deshabilitar' : 'Habilitar'}
            </button>
          </div>
          <FormTask></FormTask>
       </Container>
    </>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TaskList from './TaskList';

const FormTask = () => {
  let tasksFormLocalStorage = JSON.parse(localStorage.getItem('tasklist')) || [];
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(tasksFormLocalStorage);


  //aquí uso el ciclo de vide del componente
/* 
  useEffect(()=>{
    //aqui se ejecuta tanto en montaje como actualización
    console.log('Ejecutando el ciclo de vida del componente FormTask');
  }); */
/* 
  useEffect(()=>{
    //aqui se ejecuta solo en montaje 
    console.log('Ejecutando el ciclo de vida del componente FormTask');
  }, []);
   */
  useEffect(()=>{
    //aqui se ejecuta tanto en montaje como actualización pero dependiendo de uno o varios states
    //console.log('Ejecutando el ciclo de vida del componente FormTask');
    localStorage.setItem('tasklist', JSON.stringify(tasks));
  }, [tasks]); //array de dependencias

  //console.log(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    // tasks.push() no usar este modo si no usar spread operator haciendo uso de setTasks
    setTasks([...tasks, task]);
    //limpiar el form
    setTask('');
  };
  
  const deleteTask = (taskName)=>{
    let filterArray = tasks.filter(task => task !== taskName);
    setTasks(filterArray);
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-3 text-center'>
          <Form.Control
            className='mb-3'
            type='text'
            placeholder='Ingresar una tarea'
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button variant='primary' type='submit'>
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className='container'>
        <TaskList tasksArray={tasks} deleteTask={deleteTask}></TaskList>
      </section>
    </>
  );
};

export default FormTask;
/* eslint-disable */
import React, { useEffect, useState } from 'react';

interface Mensaje {
  id?: string;
  usuario: string;
  contenidoMensaje: string;
  canal: string;
}

const App = () => {
  const [todosLosMensajes, setTodosLosMensajes] = useState<Mensaje[]>([]); 

  useEffect(() => {
    fetch('http://localhost:8080/mensajes')
      .then(response => response.json())
      .then(data => setTodosLosMensajes(data))
  }, [])

  return (
    <>
      <h1 className='text-white text-3xl  text-center  '>Mensajes guardados en la base de datos</h1>
      <section className='flex flex-col items-start ml-6'>
      {todosLosMensajes.map((mensaje, index) => (
        
        <div key={index} className='text-white flex flex-col mt-3'>
          <p className='border border-purple-200 w-min rounded-xl ml-1  opacity-80  text-sm '> @{mensaje.usuario} </p>
          <p  className='border  border-purple-400  rounded-2xl text-lg'>{mensaje.contenidoMensaje}</p>
          
        </div>
      ))}
      </section>
    </>
  )
}

export default App;
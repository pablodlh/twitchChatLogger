/* eslint-disable */

import React, { useEffect, useState } from 'react';

interface Mensaje {
  id: string;
  usuario: string;
  contenidoMensaje: string;
  canal: string;
}

const App = () => {
  const [todosLosMensajes, setTodosLosMensajes] = useState<Mensaje[]>([]);
  const [mensajesFiltrados, setMensajesFiltrados] = useState<Mensaje[]>([]);
  const [usuarioFiltrado, setUsuarioFiltrado] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/mensajes')
      .then(response => response.json())
      .then(data => {
        setTodosLosMensajes(data);
        setMensajesFiltrados(data);
      })
  }, [])

  const filtrarPorUsuario = () => {
    setMensajesFiltrados(todosLosMensajes.filter(mensaje => mensaje.usuario === usuarioFiltrado));
  }

  return (
    <main className='text-white'>
      <h1 className='text-white text-3xl  text-center  '>Mensajes guardados en la base de datos</h1>
      <section className='flex flex-col items-start ml-6'>
          <label > Filtrar por usuario
            <input 
              className='text-black' 
              id='filtrarUsuario'
              onChange={e => setUsuarioFiltrado(e.target.value)}
            />
          </label>
          <button onClick={filtrarPorUsuario} className=' border border-purple-800 w-14 bg-purple-400'>Buscar</button>
          {mensajesFiltrados.map((mensaje) => (
            <div key={mensaje.id} className='text-white flex flex-col mt-3'>
              <p className='border border-purple-200 w-min rounded-xl ml-1  opacity-80  text-sm '> @{mensaje.usuario} </p>
              <p className='border  border-purple-400  rounded-2xl text-lg pl-2 pr-2'>{mensaje.contenidoMensaje}</p>
            </div>
          ))}
      </section>
    </main>
  )
}

export default App;
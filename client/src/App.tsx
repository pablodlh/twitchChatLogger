/* eslint-disable */
import React, { useEffect, useState } from 'react'

interface Mensaje {
  id: string
  usuario: string
  contenidoMensaje: string
  canal: string
}

const App = (): any => {
  const [todosLosMensajes, setTodosLosMensajes] = useState<Mensaje[]>([])
  const [mensajesFiltrados, setMensajesFiltrados] = useState<Mensaje[]>([])
  const [usuarioFiltrado, setUsuarioFiltrado] = useState('')
  const [canalFiltrado, setCanalFiltrado] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/mensajes')
      .then(response => response.json())
      .then(data => {
        setTodosLosMensajes(data)
        setMensajesFiltrados(data)
      })
  }, [])

  const filtrarPorUsuario = (): void => {
    setMensajesFiltrados(todosLosMensajes.filter((mensaje: { usuario: string }) => mensaje.usuario === usuarioFiltrado))
  }

  const filtrarPorCanal = (): void => {
    setMensajesFiltrados(todosLosMensajes.filter((mensaje: { canal: string }) => mensaje.canal === canalFiltrado))
  }

  const filtrarPorCanalYUsuario = (): void => {
    setMensajesFiltrados(todosLosMensajes.filter((mensaje: { canal: string, usuario: string }) => mensaje.canal === canalFiltrado && mensaje.usuario === usuarioFiltrado))
  }
  const filtrarTodos = (): void => {
    setMensajesFiltrados(todosLosMensajes)
  }
  const actualizarMensajes = (): void => {
    fetch('http://localhost:8080/mensajes')
      .then(response => response.json())
      .then(data => {
        console.log('mensajes actualizados')
        setTodosLosMensajes(data)
        setMensajesFiltrados(data)
      })
  }

  return (
    <main className='text-white'>
      <h1 className='text-white text-3xl  text-center  mb-4 '>Mensajes guardados en la base de datos</h1>
      <section className='flex flex-col items-start ml-6'>
        <section className='botones flex   justify-between w-full'>

        <label className=' flex'> Usuario
          <input
            className='text-black ml-2'
            id='filtrarUsuario'
            onChange={e => { setUsuarioFiltrado(e.target.value) }}
          />
        </label>

        <label className=' flex'> Canal
          <input
            className='text-black ml-2'
            id='filtrarUsuario'
            onChange={e => { setCanalFiltrado(e.target.value) }}
          />
        </label>

        <label>
        </label>

      <section>
      <button onClick={filtrarPorUsuario} className=' ml-1  border border-purple-800  bg-purple-400'>Filtrar Por Usuario</button>
      <button onClick={filtrarPorCanal} className=' ml-1  border border-purple-800  bg-purple-400'>Filtrar Por canal</button>
      <button onClick={filtrarPorCanalYUsuario} className=' ml-1  border border-purple-800  bg-purple-400'>Filtrar Por canal Y Usario</button>
      <button onClick={filtrarTodos} className=' ml-1  border border-purple-800  bg-purple-400'>Todos Los Mensajes </button>
      <button onClick={actualizarMensajes} className=' ml-1  border border-green-800  bg-green-400'>Actualizar Mensajes </button>

      </section>
        </section>

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

export default App

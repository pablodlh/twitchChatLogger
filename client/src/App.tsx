/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Mensaje from './models/Mensaje'
import MensajesList from './components/MensajesList'
import Filtros from './components/Filtros'

const App = (): JSX.Element => {
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
      <h1 className='text-white text-3xl text-center mb-4 '>Mensajes guardados en la base de datos</h1>
      <Filtros
        setUsuarioFiltrado={setUsuarioFiltrado}
        setCanalFiltrado={setCanalFiltrado}
        filtrarPorUsuario={filtrarPorUsuario}
        filtrarPorCanal={filtrarPorCanal}
        filtrarPorCanalYUsuario={filtrarPorCanalYUsuario}
        filtrarTodos={filtrarTodos}
        actualizarMensajes={actualizarMensajes}
      />
      <MensajesList mensajesFiltrados={mensajesFiltrados} />
    </main>
  )
}

export default App

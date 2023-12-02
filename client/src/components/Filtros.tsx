/* eslint-disable */
import React from 'react'

interface FiltrosProps {
  setUsuarioFiltrado: React.Dispatch<React.SetStateAction<string>>
  setCanalFiltrado: React.Dispatch<React.SetStateAction<string>>
  filtrarPorUsuario: () => void
  filtrarPorCanal: () => void
  filtrarPorCanalYUsuario: () => void
  filtrarTodos: () => void
  actualizarMensajes: () => void
}

const Filtros = ({
  setUsuarioFiltrado,
  setCanalFiltrado,
  filtrarPorUsuario,
  filtrarPorCanal,
  filtrarPorCanalYUsuario,
  filtrarTodos,
  actualizarMensajes
}: FiltrosProps): JSX.Element => {
  return (
    <section className='flex flex-col items-start ml-6'>
      <section className='botones flex justify-between w-full'>
        <label className='flex'>
          Usuario
          <input
            className='text-black ml-2'
            id='filtrarUsuario'
            onChange={e => { setUsuarioFiltrado(e.target.value) }}
          />
        </label>

        <label className='flex'>
          Canal
          <input
            className='text-black ml-2'
            id='filtrarCanal'
            onChange={e => { setCanalFiltrado(e.target.value) }}
          />
        </label>

        <label></label>

        <section>
          <button onClick={filtrarPorUsuario} className='ml-1 border border-purple-800 bg-purple-400'>Filtrar Por Usuario</button>
          <button onClick={filtrarPorCanal} className='ml-1 border border-purple-800 bg-purple-400'>Filtrar Por Canal</button>
          <button onClick={filtrarPorCanalYUsuario} className='ml-1 border border-purple-800 bg-purple-400'>Filtrar Por Canal Y Usuario</button>
          <button onClick={filtrarTodos} className='ml-1 border border-purple-800 bg-purple-400'>Todos Los Mensajes</button>
          <button onClick={actualizarMensajes} className='ml-1 border border-green-800 bg-green-400'>Actualizar Mensajes</button>
        </section>
      </section>
    </section>
  )
}

export default Filtros

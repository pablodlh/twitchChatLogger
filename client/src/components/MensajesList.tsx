import React from 'react'
import type Mensaje from '../models/Mensaje'

interface MensajesListProps {
  mensajesFiltrados: Mensaje[]
}

const MensajesList = ({ mensajesFiltrados }: MensajesListProps): JSX.Element => {
  return (
    <section>
      {mensajesFiltrados.map((mensaje) => (
        <div key={mensaje.id} className='text-white flex flex-col mt-3'>
          <p className='border border-purple-200 w-min rounded-xl ml-1 opacity-80 text-sm'>@{mensaje.usuario}</p>
          <p className='border border-purple-400 rounded-2xl text-lg pl-2 pr-2'>{mensaje.contenidoMensaje}</p>
        </div>
      ))}
    </section>
  )
}

export default MensajesList

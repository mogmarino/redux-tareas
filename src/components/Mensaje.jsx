import React from 'react'

const Mensaje = ({contenido}) => {
  return (
    <p className='p-4 rounded shadow w-50 text-center bg-body-tertiary text-danger fw-semibold fs-5 text-capitalize'>
        {contenido}
    </p>
  )
}

export default Mensaje
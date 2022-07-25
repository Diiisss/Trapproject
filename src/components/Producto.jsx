import React from 'react'

const Producto = (Marca,Modelo,Color) => {
  return (
  <>
    <div className='bg-bluedark-300 p-3 rouded-md text-lg '></div>
    <div>Modelo: {Modelo}</div>
    <div>Marca: {Marca}</div>
    <div>Color: {Color}</div>
    </>
  )
}

export default Producto
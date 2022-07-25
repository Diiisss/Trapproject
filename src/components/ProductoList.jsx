import React from 'react'
import Producto from './Producto'

const ProductoList = ({products}) => {
  return (
     <div className='grid grid-cols-4 gap-4'>
    {/* <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/> */}
                    {
                        products.map((Producto)=>
                             <Producto key={Producto.id} modelo = {Producto.modelo} marca ={Producto.marca} color={Producto.color}/>

                                )
                    }

    </div>                
  )
}

export default ProductoList
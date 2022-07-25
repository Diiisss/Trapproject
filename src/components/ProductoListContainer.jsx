import React, { useEffect, useState } from 'react'
import ProductoList from './ProductoList'

const ProductoListContainer = () => {
 const [products,setProducts]=useState([])

 useEffect(()=>{
                    setProducts(

                        {
                            id:1,
                            Modelo: "Free",
                            Marca:"Puma",
                            Color:"White"
                        },
                        {
                            id:2,
                            Modelo: "Elegance",
                            Marca:"Adidas",
                            Color:"Beige"
                        },
                        {
                            id:3,
                            Modelo: "Air Force",
                            Marca:"Nike",
                            Color:"Green & lit"
                        },
                        {
                            id:4,
                            Modelo: "Casual",
                            Marca:"Cat",
                            Color:"Brown&Beig"
                            
                        },
                        {
                            id:5,
                            Modelo: "Running",
                            Marca:"Rebook",
                            Color:"Brown&Beig"
                        }
                                       
                              
                    )

},[])


  return (
    <>
    <h1 className='font-bold'>Productos disponibles</h1>
    <div className='bg-gray-100 p-4 m-5'> 
    <ProductoList products={products}/>  
    </div>
    </>

  )
}

export default ProductoListContainer
import React, { useEffect, useState } from 'react'

const Hooks = () => {
 const [count,setCount] = useState (0)
 const [name, setName] = useState('Coder')

 //despues de que la app se monto y una unica vez === componentdimount()
 useEffect(()=>{console.log("Hola desde el useEfect []")},[
                    
 ])

//se va a ejecutar cuando cambia count y al inicio del render === componentediUpdate
 useEffect(()=>{console.log("Hola desde el useEfect [count]")},[count
                    
])

//al inicio en cada render y siempre en cada render

useEffect(()=>{
                    console.log("Hola desde el useEfect SIN")
})


// al inicio del render y cuando cambia el name

useEffect(()=>{console.log("Hola desde el useEfect [count]")},[count,name               
])






  return (
                    <>
                    
    <div onClick={()=>setName("Coderhouse Argentina")}>Nombre: {name}</div>
    <button onClick={()=>setCount (count+1)}>Contador: {count}</button>
    </>
  )
}

export default Hooks
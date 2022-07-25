import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Nanbar'
import Novedades from './components/Novedades'
import Error from './components/Error'
import Mensaje from './components/Mensaje'
import ProductoListContainer from './components/ProductoListContainer'

export function titulo(){
  return(
    <div> Sol el Titulo</div>
  )

}
  
function App() {
  // // const [count, setCount] = useState(0)

  let open = true 

  const suma =()=>{
    console.log("Estoy sumando")
  }
  if(open){
    console.log("Esta abierto")
  }else{
      console.log("Esta Cerrado")
  }

    //Navbar () es lo mismo que <Navbar /> x eso en el index llamamos a la funcion app pero de forma JSX
    //Navbar ('Nnomredemiproyecto')
  let [titulo, settitulo] = useState('Hooks')
  const[total, settotal]= useState(0)
 
  
  console.log(titulo)
  settitulo("Clase de componentes")
  console.log(titulo)

  let subtitulo = "Componentes"
  const funcionModifica =()=>{
    setTitulo("Clase de componentes")
    console.log(titulo)

  }
    return (
    
    <>
      {/* {open ? "Esta Open" ! "no esta open" } */}
      <div className="App" style={{paddingTop:10}}>
        <h1>Hola</h1>
        <div>Saludos</div>
        <button onClick={()=>fn()} >Hola</button>
        <button onClick={suma} >Clikeame</button>
        <img src='{React2}'alt=""/>
        <input/>
        <h1>Hola</h1>
        <Navbar titulo ={titulo} subtitulo={subtitulo} />
        <Novedades />
        <Error Mensaje =" MSJ EROR" componente ={Mensaje}>
          {/* <p>Soy children</p>
          <h1> Soy children</h1>
          <Mensaje /> */}
        </Error>
        <ProductoListContainer/>
      </div>
      
      <Hooks/>
    </>
  )
}
export default App


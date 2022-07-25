import React from 'react'
import Playlist from './Playlist'

const Novedades = ({titulo,subtitulo}) => {
                   // console.log (props)
                    //let titulo = proprs.titulo
                    const saludar = () => {
                                        console.log("HOLA SOY LA FUNCION DEFINIDA EN NOVEDADES y ejecutada desde plailist")
                    }
    let playlsit = {
      titulo: "BAS BUNNY",
      autor: "Benito",
      descripcion : "Cancion mas sonada"
    }
    let songs =["Viva la vida","Gravity","Colatura"]
  return (
//     <div>{pros.titulo}</div>
                    <>
                    <div>{titulo}</div>
                    <div>{subtitulo}</div>
                    <div>Esta es una seccion de Novedades</div>
                    <Playlist />
                    <Playlist  titulo="Esta es de Bad Bunny" description ="Esta es una playlist de Bad Bunny" saludo={saludar}/>
                    <Playlist  titulo="Esta es de DUKi" descripcion="Esto es todo del duki"/>
                    <Playlist playlsit = {playlist} songs ={songs}/>
                    <Playlist />



                     </>
  )
}

export default Novedades


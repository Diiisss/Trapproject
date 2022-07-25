import Titulo from './Titulo'

const Playlist = ({Playlist, songs}) => {
  // console.log (songs)
  return (
    <div style={{background:"red"}}>
                 {/* <h1>Titulo de Playlist</h1> */}
                 <Titulo titulo={playlist.Titulo} />
                 <p>{playlist.descripcion}</p>
                 <p>{playlist.autor}</p>
                 {songs.map((item,i) => <li key={i}>(item)</li>)}

                 <button onClick={saludo}>Saludar</button>                  <p>Esta es la Descripcion</p>
                 <h1>This is Genial</h1>   
    </div>
  )
}

export default Playlist
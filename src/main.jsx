import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'    //{App}(celeste)
import './index.css'

//(funcion en js) app() // (funcion en jsx) <app/>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

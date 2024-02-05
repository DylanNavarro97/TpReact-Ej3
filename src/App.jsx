import './App.css'
import { Hello } from './Hello'

function App() {

  const nuevoSaludo = "my friend"

  return (
    <>
     <Hello saludo={nuevoSaludo}/>
    </>
  )
}

export default App

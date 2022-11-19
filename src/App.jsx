
import './App.css'
import Escena from './components/escena/Escena'
import HistoryTexts from './assets/historyTexts.js'


function App() {

 
  return (
    <>
      {HistoryTexts.map((item,i)=> <Escena  text={item.text} />)}
    </>
  )
  
}

export default App

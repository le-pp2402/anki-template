import './App.css'
import { Front } from './components/Front'
import { Back } from './components/Back'
import { InputCard } from './components/InputCard'

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Front />
      <InputCard />
      <Back />
    </div>
  )
}

export default App

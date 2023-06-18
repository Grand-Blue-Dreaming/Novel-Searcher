import { BrowserRouter } from "react-router-dom"
import { Background, Navbar, StarsCanvas } from './components'

const App = () => 
{
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <div className="relative z-0">
          <Background />
          <StarsCanvas />
        </div>
        <footer className="text-center text-gray-500 text-sm">
          &copy; 2023 Grand Blue Dreaming
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App

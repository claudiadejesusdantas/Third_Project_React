import { ApplicationRoutes } from "./Router"
import { Footer } from "./components/Footer"
import './global.css'
import './styles/components/footer.css'

function App() {
  return (
    <div className="App">
      <ApplicationRoutes/>
      <Footer text="Claudia de Jesus Dantas"/>
    </div>
  )
}

export default App

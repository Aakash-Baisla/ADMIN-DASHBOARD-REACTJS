import './App.css'
import Sidebar from './Component/Sidebar'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <div className='w-100 d-flex align-items-stretch justify-content-between'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App

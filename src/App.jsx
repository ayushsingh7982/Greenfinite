import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CustomCursor from './components/ui/Cursor'
import UploadPage from './pages/UploadPage'
function App() {
  return (

    <div className="min-h-screen flex flex-col">
    <CustomCursor />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} /> 
        </Routes>
      </div>
      
    </div>
  )
}

export default App


import {Router,Route,BrowserRouter, Routes} from "react-router-dom"
import Login from "./pages/Login"
function App() {


  return (
 <BrowserRouter>
 <Routes>
<Route path="/" element={<Login/>} />
    <Route path="/home" element={<h1>Home</h1>} />
 
 </Routes>
    
 </BrowserRouter>
  )
}

export default App

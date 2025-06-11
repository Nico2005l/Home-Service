import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'
import Registro from './components/Registro'
import Login from './components/Login'
import CambiarContraseña from './components/CambiarContraseña'
import Home from './components/Home'
import MarketPage from './components/MarketPage'
import Contacto from './components/Contacto'
import MenuPosteos from './components/MenuPosteos'
import Profile from './components/Profile'
import EditProfile from './components/EditarPerfil'
import ServiceProfile from './components/ServiceProfile'
import EditPosts from './components/EditPosts';
import EditService from './components/EditService';
import CreateService from './components/CrearService'
import NotFoundPage from './components/NotFound'
import ReviewPage from './components/ReviewPage'
import MenuBackOffice from './components/MenuBackOffice'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar" element={<CambiarContraseña />} />
        <Route path="/mercado" element={<MarketPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/posteos" element={<MenuPosteos />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/editar-perfil" element={<EditProfile />} />
        <Route path="/servicio" element={<ServiceProfile />} />
        <Route path="/editar-posts" element={<EditPosts />} />
        <Route path="/editar-post/:id" element={<EditService />} />   
        <Route path="/crear-post" element={<CreateService />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App

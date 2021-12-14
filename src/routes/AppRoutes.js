import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Registro from '../components/Login/Registro'
import Navbar from '../components/ui/Navbar'

// Rutas de la aplicación
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
                    <Routes>

                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/registro" element={<Registro />} />

                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

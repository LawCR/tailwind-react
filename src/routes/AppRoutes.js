import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Registro from '../components/Login/Registro'
import Cards from '../components/Card/Cards'
import Navbar from '../components/ui/Navbar'
import Detalle from '../components/Detalle/Detalle'
import CardDetalle from '../components/Card/CardDetalle'
import NoMatch from '../components/NoMatch'

// Rutas de la aplicación
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
                <Routes>

                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />

                    <Route path="/cards/*" element={<Cards />}>
                        <Route path=":category" element={<Cards />} />
                    </Route>
                    <Route path="/card/:id" element={<CardDetalle />} />

                    <Route path="/detalle" element={<Detalle />} />


                    <Route path="*" element={<NoMatch />} />
                    {/* <Route path="*" element={<Navigate />} /> */}
                    

                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

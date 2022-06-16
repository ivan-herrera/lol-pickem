import { Routes, Route, Router } from 'react-router-dom'
import Auth from '../components/Auth'
import Navbar from '../components/Navbar'
import ProtectedRoute from '../components/ProtectedRoute'
import Welcome from '../components/Welcome'
import Predictions from '../pages/Predictions'

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Welcome />
                    </ProtectedRoute> 
                } />
                <Route path="predictions" element={
                    <ProtectedRoute>
                        <Predictions />
                    </ProtectedRoute>  
                } />
                <Route path="auth" element={<Auth />} />

            </Routes>
        </>
    )
}

export default AppRouter
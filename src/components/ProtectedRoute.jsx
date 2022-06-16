import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({children}) {
    const { user, loading, session, event } = useAuth()

    if(loading) return <span className='font-bold text-2xl'>Loading</span>
    
    if(!user) return <Navigate to="/auth"/>

    return <>{children}</>
}

export default ProtectedRoute
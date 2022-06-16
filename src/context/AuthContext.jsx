import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../api/supabase-config";

export const authContext = createContext()

// Hook personalizado
export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error("There's no Auth Provider")
    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const {data: authListener} = supabase.auth.onAuthStateChange( (event, session) => {
            //checkUser()
            const user = supabase.auth.user()
            setUser(user)
            setLoading(false)
            setSession(session)
            console.log(user)
        })

        return () => {
            authListener.unsubscribe()
        }
    }, [])

    return (
        <authContext.Provider value={({user, loading, session})}>
            {children}
        </authContext.Provider>
    )
}
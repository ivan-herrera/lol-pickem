import { useEffect, useState } from "react"
import { getUserProfile } from "../services/auth"

const useProfile = () => {
    const [username, setUsername] = useState(null)

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        const result = await getUserProfile()
        
        if (result) {
            setUsername(result)
        }
    }
    console.log(username)
    return username
}

export default useProfile
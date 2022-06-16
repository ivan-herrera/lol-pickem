import { useEffect, useState } from "react"
import { getMatchs } from "../services/match"

const useMatch = () => {
    const [matchs, setMatchs] = useState([])

    useEffect(() => {
        handleMatchs()
    }, [])

    const handleMatchs = async () => {
        const result = await getMatchs()

        if (result) {
            setMatchs(result)
        }
    }

    return matchs
}

export default useMatch
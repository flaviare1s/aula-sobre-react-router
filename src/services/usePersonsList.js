import { useState } from "react"
import { ApiUrl } from "../constants"

export const usePersonsList = () => {
    const [pessoas, setPessoas] = useState()

    const loadPessoas = async () => {
        try {
            const response = await fetch(`${ApiUrl}/pessoas`)
            const data = await response.json()
            console.log(1, data)
            setPessoas(data[0].name)
        } catch (error) {
            console.log(data)
        }   
    }

    return { pessoas, loadPessoas }
}
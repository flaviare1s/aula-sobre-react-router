import { useState } from "react"
import { ApiUrl } from "../constants"

export const usePersonsList = () => {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        try {
            const response = await fetch(`${ApiUrl}/pessoas`)
            const data = await response.json()
            console.log(data)
            setUsers(data[0].name)
        } catch (error) {
            console.error(error)
        }   
    }

    return { users, loadUsers }
}
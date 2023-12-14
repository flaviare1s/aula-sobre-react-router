import { ApiUrl } from "../constants"

export const useProductList = async () => {
    try {
        const response = await fetch(`${ApiUrl}/products`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(data)
    }
}
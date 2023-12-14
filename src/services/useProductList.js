import { useState } from "react"
import { ApiUrl } from "../constants"

export const useProductList = () => {
    const [products, setProducts] = useState()

    const loadProducts = async () => {
        try {
            const response = await fetch(`${ApiUrl}/products`)
            const data = await response.json()
            console.log(1, data[0].product)
            setProducts(data)
        } catch (error) {
            console.log(data)
        }   
    }

    return { products, loadProducts }
}
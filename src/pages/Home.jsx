import { useEffect } from "react"
import { useProductList } from "../services/useProductList"


export const Home = () => {
  const { products, loadProducts } = useProductList()

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <>
      <div>
          <h1>Home</h1>
          <h2>{products[0].product}</h2>
      </div>

    </>
  )
}


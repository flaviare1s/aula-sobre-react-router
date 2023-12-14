import { useProductList } from "../services/useProductList"


export const Home = () => {
  const { products } = useProductList()

  return (
    <>
      <div>
          <h1>Home</h1>
          <h2>This is the main page of the website</h2>
      </div>

    </>
  )
}


import { useEffect } from "react"
import { usePersonsList } from "../services/usePersonsList"


export const Home = () => {
  const { pessoas, loadPessoas } = usePersonsList()

  useEffect(() => {
    loadPessoas()
  }, [])

  return (
    <>
      <div>
          <h1>Home</h1>
          <h2>{pessoas}</h2>
      </div>

    </>
  )
}


import { useEffect } from "react"
import { usePersonsList } from "../services/usePersonsList"
import { useSelectedIds } from "../services/useSelectedIds"


export const Home = () => {
  const { pessoas, loadPessoas } = usePersonsList()
  const { selectedIds } = useSelectedIds()

  useEffect(() => {
    loadPessoas()
    
  }, [])
  return (
    <>
      <div>
          <h1>Home</h1>
          <h2>{pessoas}</h2>
          <button onClick={() => selectedIds(personId)}>Clique aqui</button>
      </div>

    </>
  )
}


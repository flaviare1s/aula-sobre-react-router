import { useEffect } from "react"
import { usePersonsList } from "../services/usePersonsList"
import { useSelectedIds } from "../services/useSelectedIds"


export const Home = () => {
  const { users, loadUsers } = usePersonsList()
  const { selectedIds } = useSelectedIds()

  useEffect(() => {
    loadUsers()
  }, [])
  
  return (
    <>
          <h1>Home</h1>
          <h2>{users}</h2>
          <button onClick={() => selectedIds(user.id)}>Clique aqui</button>
    </>
  )
}


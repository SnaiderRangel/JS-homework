import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  email: string
}

const API_URL = 'https://jsonplaceholder.typicode.com/users'

function FetchComponent() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // cancel the request if the component unmounts before it finishes
    const controller = new AbortController()

    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data: User[] = await response.json()
        setUsers(data)
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Something went wrong')
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    fetchUsers()

    return () => controller.abort()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p className="error">Error: {error}</p>
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  )
}

export default FetchComponent

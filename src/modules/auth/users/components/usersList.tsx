'use client'

import { User } from "@prisma/client"
import { useEffect, useState } from "react"


export default function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
  }, [])

  return (
    <ul className="my-10">
      {users.map((user: User) => (
        <li key={user.id}>{user.name} / {user.email}</li>
      ))}
    </ul>
  )
}
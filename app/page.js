'use client'

import { useState } from 'react'

const Page = () => {
  const [open, setOpen] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Button>Register</Button>
      </div>
    </>
  )
}

const Button = ({ children }) => {
  return (
    <button
      className="px-6 py-3 bg-blue-500 text-white rounded-md"
      onClick={() => console.log('button clicked')}
    >
      {children}
    </button>
  )
}

export default Page

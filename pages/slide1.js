import { useId, useState } from 'react'

const Page = () => {
  const [show, setShow] = useState(false)
  const [firstName, setFirstName] = useState('')

  return (
    <>
      <div className="mx-auto my-16 flex max-w-md justify-center">
        <Button onClick={() => setShow(!show)}>Register</Button>
      </div>
      {show && (
        <div className="mx-auto my-16 max-w-md">
          <Input
            label="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      )}
    </>
  )
}

const Button = ({ children, ...props }) => (
  <button
    className="rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
    {...props}
  >
    {children}
  </button>
)

const Input = ({ label, ...props }) => {
  const inputId = useId()

  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <div className="mt-1">
        <input
          type="text"
          id={inputId}
          className="w-full rounded-md border-2"
          {...props}
        />
      </div>
    </div>
  )
}

export default Page

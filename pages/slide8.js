import { Transition } from '@headlessui/react'
import { Fragment, useId, useState } from 'react'

const Page = () => {
  const [show, setShow] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <>
      <div className="mx-auto my-16 flex max-w-md justify-center">
        <Button onClick={() => setShow(!show)}>Register</Button>
      </div>
      <Animate show={show}>
        <SlideOver>
          <h2 className="my-6 text-2xl font-bold">Register</h2>
          <div className="space-y-4">
            <Animate.Group timing="linear">
              <FadeIn>
                <Input
                  label="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FadeIn>
              <FadeIn>
                <Input
                  label="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FadeIn>
            </Animate.Group>
          </div>
          <div className="my-6">
            <FadeIn delay="delay-[900ms]">
              <Button onClick={() => setShow(false)}>Close</Button>
            </FadeIn>
          </div>
        </SlideOver>
      </Animate>
    </>
  )
}

const Animate = ({ show, children }) => (
  <Transition.Root show={show}>{children}</Transition.Root>
)

const BackgroundLayer = () => (
  <Transition.Child
    enter="transition-opacity ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-gray-500 opacity-75" />
  </Transition.Child>
)

const SlideOver = ({ children }) => (
  <>
    <BackgroundLayer />
    <Transition.Child
      as={Fragment}
      enter="transform transition ease-in-out duration-500"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-500 delay-100"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-2xl">
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition.Child>
  </>
)

const FadeIn = ({ delay, children }) => (
  <Transition.Child
    enter={`transition-all ease-in-out duration-700 ${delay}`}
    enterFrom="opacity-0 translate-y-6"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition.Child>
)

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

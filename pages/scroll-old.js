import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { InView } from 'react-intersection-observer'

const Scroll = () => {
  return (
    <>
      <div className="bg-red-100 h-screen flex items-center justify-center">
        <div>hello world</div>
      </div>
      <div className="bg-green-100 h-screen flex items-center justify-center">
        <ScrollFadeIn>
          <div className="p-24 bg-green-600 text-white rounded-xl">Hello</div>
        </ScrollFadeIn>
      </div>
      <div className="bg-blue-100 h-screen flex items-center justify-center">
        <ScrollFadeIn>
          <div className="p-24 bg-blue-600 text-white rounded-xl">World</div>
        </ScrollFadeIn>
      </div>
    </>
  )
}

const ScrollFadeIn = ({ children }) => (
  <InView>
    {({ inView, ref }) => (
      <div ref={ref}>
        <Transition
          show={inView}
          as={Fragment}
          enter="ease-in-out delay-100 duration-[1000ms] transition-all"
          enterFrom="opacity-0 translate-y-24"
          enterTo="opacity-100 translate-y-0"
        >
          {children}
        </Transition>
      </div>
    )}
  </InView>
)

export default Scroll

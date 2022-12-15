import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { InView } from 'react-intersection-observer'

const Page = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-lg space-y-4 rounded-xl bg-gray-500 p-24 text-white">
          <h3 className="text-3xl font-bold">Scroll Animate Demo</h3>
          <p className="text-gray-300">
            Please scroll down to the next page to see the fade-in effect.
          </p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <Animate inView>
          <FadeIn duration="duration-[1000ms]">
            <div className="w-full max-w-lg space-y-4 rounded-xl bg-gray-500 p-24 text-white">
              <FadeIn
                duration="duration-[800ms]"
                delay="delay-[200ms]"
                translateFrom="translate-y-12"
              >
                <h3 className="text-3xl font-bold">Second page</h3>
              </FadeIn>
              <FadeIn
                duration="duration-[600ms]"
                delay="delay-[800ms]"
                translateFrom="translate-y-12"
              >
                <p className="text-gray-300">Here is the scroll effect.</p>
              </FadeIn>
            </div>
          </FadeIn>
        </Animate>
      </div>
      {/*
      <div className="flex h-screen items-center justify-center">
        <Animate inView>
          <FadeIn enter="duration-[1000ms]">
            <div className="w-full max-w-lg space-y-4 rounded-xl bg-gray-500 p-24 text-white">
              <FadeIn
                enter="duration-[800ms] delay-[200ms]"
                enterFrom="translate-y-12"
              >
                <h3 className="text-3xl font-bold">Second page</h3>
              </FadeIn>
              <FadeIn
                enter="duration-[600ms] delay-[800ms]"
                enterFrom="translate-y-12"
              >
                <p className="text-gray-300">Here is the scroll effect.</p>
              </FadeIn>
            </div>
          </FadeIn>
        </Animate>
      </div>
      */}
      <div>
        <InView>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={inView}>
                <Transition.Child
                  as="div"
                  enter="ease-in duration-[1000ms] transition-all"
                  enterFrom="opacity-0 translate-y-48"
                  enterTo="opacity-100 translate-y-0"
                  className="w-full max-w-lg space-y-4 rounded-xl bg-gray-500 p-24 text-white"
                >
                  <Transition.Child
                    as="h3"
                    enter="ease-in delay-[200ms] duration-[800ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="text-3xl font-bold"
                  >
                    Second page
                  </Transition.Child>
                  <Transition.Child
                    as="p"
                    className="text-gray-300"
                    enter="ease-in delay-[800ms] duration-[600ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                  >
                    Here is the scroll effect.
                  </Transition.Child>
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>
      </div>
    </>
  )
}

const Animate = ({ inView = false, show, children }) => {}

const FadeIn = ({ duration, delay, translateFrom, children }) => {}

export default Page

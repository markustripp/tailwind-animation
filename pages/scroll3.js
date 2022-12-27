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
    </>
  )
}

const Animate = ({ inView = false, show, children }) => {}

const FadeIn = ({ duration, delay, translateFrom, children }) => {}

export default Page

const Page = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-lg space-y-4 rounded-xl bg-gray-500 p-24 text-white">
          <h3 className="text-3xl font-bold">Scroll Animate Demo</h3>
          <p className="text-gray-300">
            Please scroll down to the next page to see the fade-in effect.
            asldfkj asldf alsdkfj alsdfkj lasldkfjasdf asdf asdf
          </p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-lg space-y-4 rounded-xl bg-gray-500 p-24 text-white">
          <h3 className="text-3xl font-bold">Second page</h3>
          <p className="text-gray-300">Here is the scroll effect.</p>
        </div>
      </div>
    </>
  )
}

export default Page

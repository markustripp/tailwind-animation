import Link from 'next/link'

const slideLinks = [
  { href: '/slide1', title: 'Step 1: Create Page Structure' },
  { href: '/slide2', title: 'Step 2: Add Headless UI Transition' },
  {
    href: '/slide3',
    title: 'Step 3: Introducing Transition.Root and Transition.Child',
  },
  { href: '/slide4', title: 'Step 4: Create FadeIn Component' },
  { href: '/slide5', title: 'Step 5: Add Background and SlideOver layer' },
  { href: '/slide6', title: 'Step 6: Animate Form Elements on SlideOverLayer' },
]

const scrollLinks = [
  { href: '/scroll1', title: 'Step 1: Create Page Structure' },
  { href: '/scroll2', title: 'Step 2: Add Animation' },
]

const Home = () => {
  return (
    <div className="py-12">
      <div className="prose prose-slate mx-auto max-w-xl">
        <h1>Animation with TailwindCSS and Headless UI Transition</h1>
        <p>
          See my article on{' '}
          <a href="https://medium.com/@markustripp/animations-with-tailwind-css-c47534e57a18">
            Medium
          </a>
        </p>
        <h2>SlideOver With Animated Form Example</h2>
        <ul>
          {slideLinks.map((item) => (
            <li>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <h2>Animate On Entering Viewport</h2>
        <ul>
          {scrollLinks.map((item) => (
            <li>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home

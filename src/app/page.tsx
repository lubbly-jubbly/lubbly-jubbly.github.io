import Image from 'next/image'
import Link from 'next/link'
// Images
import telephone from './images/briefcase-open.png'
import envelope from './images/briefcase-open.png'

function HomePage() {
  return (
    <main>
      <div>
        Hello! I am a software developer, currently based in Glasgow, Scotland.
      </div>
      <div>
        <Image src="./images/fun-libby.png" alt="me" width="64" height="64" />
      </div>
    </main>
  )
}

export default HomePage

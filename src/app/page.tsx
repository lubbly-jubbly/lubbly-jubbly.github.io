import { useState } from 'react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center mx-5">
        <div className="text-center w-6/12">
          Hello! I am a software developer, currently based in Berlin.
        </div>

        {/* {loading && <Loading />} */}

        <div className={`flex justify-center my-3`}>
          <div className="h-[25vw]">
            <Image
              src="/images/rome-libby.jpg"
              alt="me"
              width={0}
              height={0}
              className="w-auto h-full"
            />
          </div>
        </div>

        <div className="text-center w-6/12">
          Welcome to my website! Have a look around and let me know if you need
          anything.
        </div>
      </div>
    </div>
  )
}

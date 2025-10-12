import React from 'react'
import Socials from '../components/Socials'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFC2E5]">

      {/* Main content */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-8 flex-1">
        
        {/* Text box */}
        <div className="sm:w-1/3 max-w-lg bg-[#C60F7B] text-[#E2DBBE] flex flex-col rounded-2xl border-2 border-[#C9A8FF] shadow-md">
          <h1 className="text-3xl font-bold p-7">Hi, I'm Nubal!</h1>
          <p className="px-7 pb-7 text-lg leading-relaxed">
            I'm an embedded systems and IoT developer passionate about building connected devices. 
            This page shows off some of my projects, whether they be work related or personal. 
            I'm always open to learning new things, and recently found myself interested in website development, so I made this website!  
          </p>
          <p className="px-7 pb-7 text-lg leading-relaxed">
            I hope you find my projects interesting and feel free to reach out through my contact page or on LinkedIn!
          </p>
        </div>

        {/* Social icons */}
        <div className="flex flex-col justify-center items-center">
          <Socials/>
        </div>

      </div>


    </div>
  )
}

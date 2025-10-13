import CollapsibleBox from "../components/CollapsibleBox"
import SkillsTag from "../components/SkillsTag"

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FFC2E5] px-4 gap-10 p-5">
      <CollapsibleBox title="Education">
        <p>
          NAIT
        </p>
      </CollapsibleBox>
      {/* Description */}
      <div className="w-full max-w-2xl bg-[#C60F7B] text-[#E2DBBE] flex flex-col rounded-2xl border-2 border-[#C9A8FF] shadow-md gap-8 p-5">
        <h1 className="text-3xl font-bold p-7">Hi, I'm Nubal Manhas!</h1>
        <p className="px-7 pb-7 text-lg leading-relaxed">
          I'm an embedded systems and IoT developer. 
          I'm always learning new things and found myself to learn a bit of web dev, so I made this website!  
        </p>
        <p className="px-7 pb-7 text-lg leading-relaxed">
          I hope you find my projects interesting and feel free to reach out through my contact page or on LinkedIn!
        </p>
      </div>

      {/* Socials */}
      <div className="mt-6">
      </div>
    </div>
  )
}

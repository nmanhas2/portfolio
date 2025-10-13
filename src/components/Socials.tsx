import {FaGithub, FaLinkedin} from "react-icons/fa"

export default function Socials() {
  return (
    <div className='flex flex-row gap-4'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nubal-manhas-8113031b9/" className="hover:bg-[#980B5D] h-[95px] w-[95px] rounded-2xl transition-all flex items-center justify-center">
        <FaLinkedin size={100}></FaLinkedin>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/nmanhas2" className="hover:bg-[#980B5D] transition-all rounded-full h-[100px] ">
        <FaGithub size={100}></FaGithub>
      </a>
    </div>
  )
}

import {FaGithub, FaLinkedin} from "react-icons/fa"

export default function Socials() {
  return (
    <div className='flex flex-row gap-4'>
      <a href="https://www.linkedin.com/in/nubal-manhas-8113031b9/">
        <FaLinkedin size={100}></FaLinkedin>
      </a>
      <a href="https://github.com/nmanhas2">
        <FaGithub size={100}></FaGithub>
      </a>
    </div>
  )
}

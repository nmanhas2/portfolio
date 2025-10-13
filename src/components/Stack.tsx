import {FaReact, } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
export default function Stack() {
  return (
    <div className='flex flex-row gap-4 p-5'>
      <FaReact size={30}></FaReact>
      <RiTailwindCssFill size={30}></RiTailwindCssFill>
      <SiVite size={30}></SiVite>
      <SiTypescript size={30}></SiTypescript>
    </div>
  );
}

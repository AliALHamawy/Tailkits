import { AiOutlineArrowRight } from "react-icons/ai"; 
import './Hero.css'

function Hero() {
  return (
    <>
    <div className="hero bg-(--hero-bg) w-full pt-40 pb-20">
      <div className="cont max-w-[1280px] m-auto px-4 flex gap-20 ">

      <div className='max-w-[534px] p-4 md:p-15 flex flex-col m-auto md:m-0 text-center items-center md:text-start md:items-start gap-8'>
        <p className='text-[14px] bg-(--secondary-color) text-(--text-main) p-1 px-2 rounded-2xl w-fit shadow-xl'>Introducing TailKits Astro</p>
        <h1 className='text-4xl font-bold text-(--text-main)'>Redefining SaaS Standards</h1>
        <p className='text-(--text-secondary) text-[16px]'>Join the league of mavericks and push the boundaries of SaaS design with inspiring design resources</p>
        <div className="flex  gap-4">

            <button className='text-[14px] p-2 rounded-xl shadow-xl bg-(--secondary-color) flex items-center gap-1 transition-all duration-300 hover:bg-(--secondary-colorHover)'>learn More<AiOutlineArrowRight className="ml-2"/></button>
            <button className='text-[14px] p-2 rounded-xl shadow-xl text-(--primary-color) flex items-center gap-1 bg-(--color-main) transition-all duration-300 hover:bg-(--text-mainHover) '>Try free <span className=' text-(--text-secondary)'>- 14 days</span><AiOutlineArrowRight className="ml-2"/></button>
          </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Hero
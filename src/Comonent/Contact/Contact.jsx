import { AiOutlineArrowRight } from 'react-icons/ai'
import './Contact.css'

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container flex flex-col gap-5 text-center items-center m-auto px-4">
          <div className="max-w-[700px] flex flex-col gap-5 text-center items-center m-auto my-20">

            <p className='text-[14px] bg-(--secondary-color) text-(--text-main) p-1 px-2 rounded-2xl w-fit shadow-xl mb-5'>Contact</p>
            <h1 className='text-4xl font-bold text-(--text-main)'>SaaS Design Made Easy</h1>
            <p className='text-(--text-secondary) text-[16px] font-medium'>Streamline your projects with our comprehensive collection of design resources and stay ahead in the competitive SaaS market</p>
          </div>
          <div className='mt-12 grid items-center gap-8 text-center md:px-4 lg:grid-cols-3 lg:gap-x-24 lg:gap-y-0 lg:px-8'>
            <div className='relative first:before:relative before:left-1/2 before:-translate-x-1/2 lg:before:translate-x-0 before:w-16 before:h-px before:absolute lg:before:-left-6 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:w-px lg:before:h-16 before:bg-neutral-100 before:-top-4'>
              <h1 className='text-7xl font-bold text-(--color-main)'>6X</h1>
              <p className="text-[14px] text-(--text-black)">Faster than others</p>
            </div>
            <div className='relative first:before:relative before:left-1/2 before:-translate-x-1/2 lg:before:translate-x-0 before:w-16 before:h-px before:absolute lg:before:-left-6 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:w-px lg:before:h-16 before:bg-neutral-100 before:-top-4'>
              <h1 className='text-7xl font-bold text-(--color-main)'>32%</h1>
              <p className="text-[14px] text-(--text-black)">Efficient compared to previous version</p>
            </div>
            <div className='relative first:before:relative before:left-1/2 before:-translate-x-1/2 lg:before:translate-x-0 before:w-16 before:h-px before:absolute lg:before:-left-6 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:w-px lg:before:h-16 before:bg-neutral-100 before:-top-4'>
              <h1 className='text-7xl font-bold text-(--color-main)'>100%</h1>
              <p className="text-[14px] text-(--text-black)">Customer happiness</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row bg-[#7C7FD9] max-w-7xl justify-between relative overflow-hidden p-10 lg:pt-50 rounded-3xl">
            <div className="left text-left flex flex-col gap-10 lg:w-[50%] lg:pr-40 mb-40 lg:mb-10">
              <p className='text-(--primary-color) text-3xl md:text-5xl '>Experience innovation like never before</p>
              <button className='text-[14px] p-2 rounded-xl shadow-xl w-fit text-(--primary-color) flex items-center gap-1 bg-(--color-main) transition-all duration-300 hover:bg-(--text-mainHover) '>Try free <span className=' text-(--text-secondary)'>- 14 days</span><AiOutlineArrowRight className="ml-2" /></button>

            </div>
            <div className="right relative"><img src="/assets/browser-mock-up-dark.png" alt="" className='absolute :-right-[650px] -bottom-[540px]  md:-right-[650px] md:-bottom-[540px] lg:-right-[550px] lg:-bottom-[350px] min-w-[1000px]'/></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
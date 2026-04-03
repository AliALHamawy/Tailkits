import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import './Scroll.css'
import { useState } from "react";

function Scroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    { para: "Working with Acme Design was a pleasure from start to finish. Their team was responsive, collaborative, and delivered exceptional designs.", name: "Jennifer Carter", jop: "Head of Marketing" },
    { para: "The attention to detail and creative solutions provided by this team exceeded our expectations. They transformed our vision into reality with remarkable precision.", name: "Michael Rodriguez", jop: "CEO" },
    { para: "Outstanding work! The design team delivered exactly what we needed and more. Their professionalism and expertise made the entire process seamless.", name: "Sarah Thompson", jop: "Product Manager" }
  ]

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? data.length - 1 : prevIndex - 1
    })
  }

  const goToNext = () => {
    setCurrentIndex((nextIndex) => {
      return nextIndex === data.length - 1 ? 0 : nextIndex + 1
    })
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="scroll p-4 mt-10">
        <div className='max-w-7xl m-auto'>
          <img src="/assets/quote.svg" alt="" className='w-[32px] h-[40px] mb-10' />
          <p className='text-xl md:text-3xl text-(--text-black) mb-10'>"{data[currentIndex].para}"</p>
          <div className='flex gap-5'><p className='text-(--text-secondary) '>{data[currentIndex].name}</p><p className='text-[14px] bg-(--bg-secondary) text-(--color-main) p-1 px-2 rounded-2xl w-fit shadow-2xl mb-5'>{data[currentIndex].jop}</p></div>

          <img src="/assets/logo-big.svg" alt="" className='h-8 mb-10' />
          <div className="flex gap-5"><BiChevronLeft className="bg-(--text-secondary) h-[44px] w-[44px] rounded-full text-(--primary-color) p-2" onClick={goToPrevious} /><BiChevronRight className="bg-(--text-secondary) h-[44px] w-[44px] rounded-full text-(--primary-color) p-2" onClick={goToNext} /></div>
          <ul className="flex my-5 gap-2">{data.map((_, index) => (
            <li
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-[8px] w-[8px] rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-(--text-secondary) w-[20px]' : 'bg-(--light-color)'
                }`}
            />
          ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Scroll
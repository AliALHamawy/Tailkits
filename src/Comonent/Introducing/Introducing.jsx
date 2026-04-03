import { useState } from 'react';
import './Introducing.css'

function Introducing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { name: 'Analytics', icon: <svg className="h-4 shrink-0 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path> </svg>, image: "/assets/browser-mock-up-1.png" },
    { name: 'Integration', icon: <svg className="h-4 shrink-0 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path> </svg>, image: "/assets/browser-mock-up-2.png" },
    { name: 'Interface', icon: <svg className="h-4 shrink-0 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path> </svg>, image: "/assets/browser-mock-up-dark.png" }
  ];

  return (
    <>
      <div className="introduction">
        <div className="cont px-4">
          <div className="max-w-[700px] flex flex-col gap-5 text-center items-center m-auto my-20">
            <p className='text-[14px] bg-(--secondary-color) text-(--text-main) p-1 px-2 rounded-2xl w-fit shadow-xl mb-5'>Introducing TailKits Astro</p>
            <h1 className='text-4xl font-bold text-(--text-main)'>SaaS Design Made Easy</h1>
            <p className='text-(--text-secondary) text-[16px] font-medium'>Streamline your projects with our comprehensive collection of design resources and stay ahead in the competitive SaaS market</p>
          </div>
          
          <div className="abc flex bg-(--line-bg) m-auto rounded-3xl p-1 w-fit gap-2">
            {items.map((item, index) => (
              <div 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center p-1 border border-transparent rounded-3xl gap-1 cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'bg-(--primary-color) border border-(--primary-color)' : 'bg-transparent'
                }`}
              >
                {item.icon}
                <p className='font-bold text-neutral-500'>{item.name}</p>
              </div>
            ))}
          </div>
          
          <div className="bottom bg-(--color-pink) px-8 pb-0 max-w-7xl rounded-4xl m-auto mt-10 relative overflow-hidden h-[250px] md:h-[600px]">
            <img 
              src={items[activeIndex].image} 
              alt={items[activeIndex].name} 
              className='mx-auto translate-y-[100px] md:translate-y-[150px] shadow-2xl rounded-2xl w-full max-w-4xl object-cover'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Introducing
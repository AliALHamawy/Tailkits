import './Advantages.css'

function Advantages() {
  return (
    <>
    <div className="advantages">
      <div className="cont flex flex-col md:flex-row">
        <div className="left md:w-[50%] min-h-80" style={{backgroundImage: `url(/assets/bg-linear-6.png)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        </div>
        <div className="right px-2 pt-12 md:p-15 flex flex-col m-auto md:m-0  text-start items-start gap-8 max-w-[570px]">
          <p className='text-[14px] bg-(--color-main) text-(--primary-color) p-1 px-2 rounded-2xl w-fit shadow-xl'>Introducing TailKits Astro</p>
        <h1 className='text-4xl font-bold text-(--text-main)'>Discover powerful advantages</h1>
        <p className='text-(--text-secondary) text-[16px] font-medium'>Embark on a journey of design exploration to craft extraordinary SaaS experiences that captivate and convert</p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
          <p className='text-[14px] font-medium text-(--text-secondary)'>Advanced Analytics</p></div>
          <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
          <p className='text-[14px] font-medium text-(--text-secondary)'>Seamless Integration</p></div>
          <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
          <p className='text-[14px] font-medium text-(--text-secondary)'>24/7 Customer Support</p></div>
          <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
          <p className='text-[14px] font-medium text-(--text-secondary)'>Intuitive User Interface</p></div>
          <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
          <p className='text-[14px] font-medium text-(--text-secondary)'>Dynamic Reporting</p></div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Advantages
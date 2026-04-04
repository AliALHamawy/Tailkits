import { AiOutlineArrowRight } from 'react-icons/ai'
import './Pricing.css'

function Pricing() {
  return (
    <>
      <div className="pricing max-w-7xl m-auto my-20 px-4">
        <div className="top flex flex-col gap-5">
          <p className='text-[14px] bg-(--secondary-color) text-(--text-main) p-1 px-2 rounded-2xl w-fit shadow-xl'>Get full access</p>
          <h1 className='text-4xl font-bold text-(--text-main)'>Tailored pricing for every stage of your journey</h1>
          <p className='text-(--text-secondary) text-[16px] font-medium max-w-2xl'>Whether you're a startup or an enterprise, find the pricing plan that perfectly aligns with your growth trajectory.</p>
        </div>
        <div className="bottom mt-20 flex justify-center flex-col lg:flex-row flex-wrap gap-5 m-auto">
          <div className="card m-auto flex flex-col justify-between w-[360px] md:w-[384px] h-[600px] p-8 rounded-2xl bg-(--card-bg) m-auto border border-neutral-200">
            <div className="top flex flex-col gap-5 text-(--text-black)">

            <h1 className="state text-xl font-bold">Basic</h1>
            <p className="title text-(--text-secondary)">Essential features at an affordable price.</p>
            <div className="price text-xl text-(--text-secondary)"><span className='text-4xl font-bold pr-2 text-zinc-700'>$28</span>/ month</div>
            <ul className='flex flex-col gap-4'>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>10 Projects</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Custom Branding</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Customer Support</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>5 Integrations</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Data Security</p></div>
            </ul>
            <button className='text-[14px] p-3 rounded-xl shadow-xl bg-(--secondary-color) flex items-center gap-1 transition-all duration-300 hover:bg-(--secondary-colorHover) w-fit'>All features<AiOutlineArrowRight className="ml-2" /></button>
            </div>
            <div className="bottom flex flex-col gap-1">
            <button className='text-[14px] p-3 flex text-center  rounded-xl shadow-xl bg-(--secondary-color) items-center gap-1 transition-all duration-300 hover:bg-(--secondary-colorHover) w-full justify-center text-(--text-main) font-bold'>Purchase</button>
              <span className='text-[14px] text-(--text-secondary)'>*simple notes about pricing</span>
            </div>
          </div>
          <div className="card m-auto flex flex-col justify-between w-[360px] md:w-[384px] h-[600px] border p-8 rounded-2xl bg-(--card-bg) m-auto border-neutral-400">
            <div className="top flex flex-col gap-5 text-(--text-black)">

            <h1 className="state text-xl font-bold">Pro</h1>
            <p className="title text-(--text-secondary)">Advanced features for enhanced productivity.</p>
            <div className='text-green-500 flex gap-4'><svg className="h-5 shrink-0 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path> </svg>
            30 days free trial included</div>
            <div className="price text-xl text-(--text-secondary)"><span className='text-4xl font-bold pr-2 text-zinc-700'>$38</span>/ month</div>
            <ul className='flex flex-col gap-4'>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>10 Projects</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Custom Branding</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Customer Support</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>5 Integrations</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Data Security</p></div>
            </ul>
            <button className='text-[14px] p-3 rounded-xl shadow-xl bg-(--secondary-color) flex items-center gap-1 transition-all duration-300 hover:bg-(--secondary-colorHover) w-fit'>All features<AiOutlineArrowRight className="ml-2" /></button>
            </div>
            <div className="bottom flex flex-col gap-1">
            <button className='text-[14px] p-3 flex text-center  rounded-xl shadow-xl bg-(--text-main) items-center gap-1 transition-all duration-300 hover:bg-(--text-mainHover) w-full justify-center text-(--secondary-color) font-bold'>Purchase</button>
              <span className='text-[14px] text-(--text-secondary)'>*simple notes about pricing</span>
            </div>
          </div>
          <div className="card m-auto flex flex-col justify-between w-[360px] md:w-[384px] h-[600px] p-8 rounded-2xl bg-(--card-bg) m-auto border border-neutral-200">
            <div className="top flex flex-col gap-5 text-(--text-black)">

            <h1 className="state text-xl font-bold">Premium</h1>
            <p className="title text-(--text-secondary)">Comprehensive solutions for growing businesses.</p>
            <div className="price text-xl text-(--text-secondary)"><span className='text-4xl font-bold pr-2 text-zinc-700'>$48</span>/ month</div>
            <ul className='flex flex-col gap-4'>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Unlimited Projects</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Custom Branding</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Customer Support</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>15 Integrations</p></div>
              <div className="flex gap-2"><svg class="h-5 shrink-0 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path> </svg>
                <p className='text-[14px] font-medium text-(--text-secondary)'>Data Security</p></div>
            </ul>
            <button className='text-[14px] p-3 rounded-xl shadow-xl bg-(--secondary-color) flex items-center gap-1 transition-all duration-300 hover:bg-(--secondary-colorHover) w-fit'>All features<AiOutlineArrowRight className="ml-2" /></button>
            </div>
            <div className="bottom flex flex-col gap-1">
            <button className='text-[14px] p-3 flex text-center  rounded-xl shadow-xl bg-(--secondary-color) items-center gap-1 transition-all duration-300 hover:bg-(--secondary-colorHover) w-full justify-center text-(--text-main) font-bold'>Purchase</button>
              <span className='text-[14px] text-(--text-secondary)'>*simple notes about pricing</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
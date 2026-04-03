import { useState } from 'react'
import './Header.css'

function Header({show, setShow}) {
  return (
    <div className="header z-50 bg-(--primary-color) px-4 fixed w-full">

    <div className={`header ${show ? 'flex' : 'hidden'} max-w-[600px] relative m-auto items-center md:justify-center gap-4 text-center px-4 p-2 `}>
      <div className='bg-(--color-main) flex text-(--primary-color) text-center items-center px-2 py-0.5 text-sm rounded-2xl '><svg class="h-3 shrink-0 mr-1.5 text-slate-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd"></path> </svg>PH10</div>
      <h1 className='text-black text-sm'>Enjoy exclusive discounts</h1>
      <button class="flex absolute right-0 h-6 w-6 cursor-pointer items-center justify-center rounded-3xl bg-neutral-200 p-1 transition hover:bg-neutral-300" type="button" aria-label="Close bar" click="bannerVisible = false"> <svg class="h-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" onClick={() => setShow(false)}> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </button>
    </div>
    </div>
  )
}

export default Header
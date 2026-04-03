import { RxArrowTopRight } from "react-icons/rx"; 
import './NavBar.css'

function NavBar({show}) {
  return (
    <nav className={`z-150 navbar fixed  backdrop-blur-md border-b  border-white/20  w-full px-4 py-4 ${show ? 'mt-10': 'mt-0'}`}>
      <div className="cont relative bg-(--secondary-color) shadow-2xl flex items-center justify-between m-auto px-4  rounded-2xl max-w-7xl max-h-[50px] p-7 text-(--text-main)">
        <div className="left  pr-8 flex gap-8"> <img src="/assets/logo.svg" alt="" className='h-7.25 w-9.75'/> <div className="flex w-[0.5px] h-4 bg-(--line-bg) m-auto hidden lg:block"></div></div>
        <div className="mid  absolute left-[50%]  -translate-x-[50%] hidden lg:block">
          <ul className="flex justify-between gap-4">
            <li><a href="#" className="text-(--text-main) hover:text-(--color-main)">Features</a></li>
            <li><a href="#" className="text-(--text-main) hover:text-(--color-main)">About</a></li>
            <li><a href="#" className="text-(--text-main) hover:text-(--color-main) flex gap-1 items-center">Contact<RxArrowTopRight className="text-xl"/></a></li>
            <li><a href="#" className="text-(--text-main) hover:text-(--color-main)">Blogs</a></li>
            <li><a href="#" className="text-(--text-main) hover:text-(--color-main)">Srvices</a></li>
            <li><a href="#" className="text-(--text-main) hover:text-(--color-main)">Pricing</a></li>
          </ul>
        </div>
        <div className="right flex "> 
          <div className="flex w-[0.5px] h-4 bg-(--line-bg) m-auto hidden lg:block">
          </div>
          <div className="flex pl-8 gap-4">

            <button className='text-[14px] p-2 rounded-xl shadow-xl bg-(--secondary-color) flex items-center gap-1 transition-all duration-300 hover:bg-(--secondary-colorHover) hidden md:block'>Log in</button>
            <button className='text-[14px] p-2 rounded-xl shadow-xl text-(--primary-color) flex items-center gap-1 bg-(--color-main) transition-all duration-300 hover:bg-(--text-mainHover) '>Try free <span className=' text-(--text-secondary)'>- 14 days</span></button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
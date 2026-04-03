import './Brands.css'

function Brands() {
  return (
    <>
      <div className="brands mb-20">

        <div className="cont m-auto px-4 flex gap-10 flex-col">

          <div className='max-w-[670px] p-4 md:p-15 flex flex-col m-auto  text-center items-center   gap-8'>
            <p className='text-[14px] bg-(--secondary-color) text-(--text-main) p-1 px-2 rounded-2xl w-fit shadow-xl'>Introducing TailKits Astro</p>
            <h1 className='text-2xl md:text-4xl font-bold text-(--text-main)'>We build strong connections with impressive network</h1>
            <p className='text-(--text-secondary) text-[16px]'>Witness the diverse range of trusted brands that have chosen us for their needs, forming a tapestry of success.</p>
          </div>

          <div className="logos flex justify-between gap-5 md:gap-8 lg:gap-25 justify-center  md:w-[600px] lg:w-[1000px] m-auto">
            <img src="/assets/logo-1.svg" alt="" className='max-h-[37px] max-w-[37px] md:max-h-[50px] md:max-w-[50px] lg:max-h-[64px] lg:max-w-[64px]' />
            <img src="/assets/logo-2.svg" alt="" className='max-h-[37px] max-w-[37px] md:max-h-[50px] md:max-w-[50px] lg:max-h-[64px] lg:max-w-[64px]' />
            <img src="/assets/logo-3.svg" alt="" className='max-h-[37px] max-w-[37px] md:max-h-[50px] md:max-w-[50px] lg:max-h-[64px] lg:max-w-[64px]' />
            <img src="/assets/logo-4.svg" alt="" className='max-h-[37px] max-w-[37px] md:max-h-[50px] md:max-w-[50px] lg:max-h-[64px] lg:max-w-[64px]' />
            <img src="/assets/logo-5.svg" alt="" className='max-h-[37px] max-w-[37px] md:max-h-[50px] md:max-w-[50px] lg:max-h-[64px] lg:max-w-[64px]' />
            <img src="/assets/logo-6.svg" alt="" className='max-h-[37px] max-w-[37px] md:max-h-[50px] md:max-w-[50px] lg:max-h-[64px] lg:max-w-[64px]' />
          </div>

        </div>

      </div>
    </>
  )
}

export default Brands
import headerImage from "/header-image.jpg"
import logo from "/logo.png"



const HeroHeader = () => {
  return (
    <div>{/* header icons */}
      <div className="w-full flex items-center h-[24px] md:h-[72px] gap-2 justify-end md:justify-between px-4 md:px-18">
        <div className="w-[10px] h-[10px] bg-[#868E96] md:bg-inherit md:w-auto md:h-[24px]">
          <img src={logo} height={24} className='hidden md:block' alt="logo" />
        </div>
        <div className="w-[10px] h-[10px] bg-[#868E96] md:bg-[#F2F2F2] rounded-full flex items-center md:w-[360px] md:h-[40px] md:relative">
          <input type="text" placeholder='Search' className='w-full h-full bg-transparent outline-none pl-10' />
          <svg width="17" className='hidden md:block absolute top-1/2 left-4 -translate-y-1/2' height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z" fill="#7A7A7A" />
          </svg>

        </div>
        <div ><svg className="block md:hidden" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z" fill="#868E96" />
        </svg>
          <p className='hidden font-semibold text-sm md:inline-flex items-center'>Create account. <a href="/register" className='text-blue-600 flex gap-1 items-center'> It's free! <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_822)">
              <path d="M7 10L12 15L17 10H7Z" fill="#2E2E2E" />
            </g>
            <defs>
              <clipPath id="clip0_1_822">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </a></p>
        </div>
      </div>

      <div className="w-full h-[236px] md:h-[440px] relative">
        {/* Header Image */}
        <img src={headerImage} alt="header" className="w-full h-full object-cover" />
        <div className="w-full h-full bg-gradient-to-b from-black/45 to-black/65 absolute top-0 left-0">
        </div>
        <span className="absolute top-4 left-4 md:hidden -translate-y-1/2 cursor-pointer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="icon/navigation/arrow_back_24px">
            <path id="icon/navigation/arrow_back_24px_2" d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white" />
          </g>
        </svg>
        </span>
        {/* Header text */}
        <div className="absolute bottom-8 md:bottom-20 left-4 md:left-50">
          <h1 className="text-white text-2xl md:text-4xl font-bold">Computer Engineering</h1>
          <p className="text-white text-sm">142,765 Computer Engineers follow this</p>
        </div>
      </div></div>
  )
}

export default HeroHeader
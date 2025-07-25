import React from 'react'
import PostCard from './PostCard'
import postImage1 from "/post-1.jpg"
import authorImg1 from "/post-1-author.jpg"
import postImage2 from "/post-2.jpg"
import authorImg2 from "/post-2-author.jpg"
import postImage3 from "/post-3.jpg"
import authorImg3 from "/post-3-author.jpg"
import authorImg4 from "/post-4-author.jpg"

const PostSection = () => {
  return (
    <div className="w-full px-4 py-2 md:px-50 md:pt-4">
      {/* for small screens */}
      <div className="w-full flex justify-between md:hidden  items-center  ">
        <span className="text-sm text-black font-semibold">Posts(36)</span>
        <div className=" bg-[#F1F3F5] rounded py-1 flex gap-3  cursor-pointer items-center  px-2 text-black"><span>Filter: All </span><span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z" fill="#868E96" />
        </svg>
        </span></div>
      </div>
      {/* for larger screen */}
      <div className="w-full text-sm md:inline-flex  justify-between hidden items-center   border-b-[1px] border-b-gray-400 gap-x-4 py-3">
        <div className='flex gap-x-4 text-[#8A8A8A] '> <p className='border-b-black border-b-[1px] -mb-5.5 text-black'>All Posts(36)</p>
          <p className=''>Article</p>
          <p className=''>Event</p>
          <p className=''>Education</p></div>
        <div className='flex gap-4'>
          <p className=" bg-[#F1F3F5] rounded py-2 flex gap-3  cursor-pointer items-center  px-3 text-black"><span>Write a Post </span><span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"></svg></span></p>
          <p className=" bg-[#2F6CE5] rounded py-2 flex gap-3  cursor-pointer items-center  px-3 text-white"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_859)">
              <path d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_859">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
            <span>Join Group </span></p>
        </div></div>

      {/* Post */}
      <div className="w-full  md:flex justify-between">
        <div className='md:w-[692px]'>
        <PostCard postImage={postImage1} postType="✍️ Article" postTitle="What if famous brands had regular fonts? Meet RegulaBrands!" postDescription="I’ve worked in UX for the better part of a decade. F.." postAuthor="Sarthak Kamra" authorImg={authorImg1} postViews="1.4k views" />
        <PostCard postImage={postImage2} postType="🔬️ Education" postTitle="Tax Benefits for Investment under National Pension Scheme launched by Government" postDescription="I’ve worked in UX for the better part of a decade. F.." postAuthor="Sarah West" authorImg={authorImg2} postViews="4.8k views" />
        {/* 3rd Card */}
        <div className="w-full flex flex-col mt-4 shadow-md rounded-xl">
          <div className="w-full h-[120px] relative mt-2 ">
            <img src={postImage3} alt="post" className="w-full rounded-t h-full object-cover" />
          </div>
          <p className="text-base text-black font-medium px-4 py-2">{"🗓️ Meetup"}</p>
          <div className="px-4">
            <div className="w-full flex items-center justify-between">
              <span className="text-xl text-black font-semibold leading-6">{"Finance & Investment Elite Social Mixer @Lujiazui"}</span>
              <span className=""><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6666 14C18.6666 15.2834 19.7166 16.3334 20.9999 16.3334C22.2833 16.3334 23.3333 15.2834 23.3333 14C23.3333 12.7167 22.2833 11.6667 20.9999 11.6667C19.7166 11.6667 18.6666 12.7167 18.6666 14ZM16.3333 14C16.3333 12.7167 15.2833 11.6667 13.9999 11.6667C12.7166 11.6667 11.6666 12.7167 11.6666 14C11.6666 15.2834 12.7166 16.3334 13.9999 16.3334C15.2833 16.3334 16.3333 15.2834 16.3333 14ZM9.33325 14C9.33325 12.7167 8.28325 11.6667 6.99992 11.6667C5.71659 11.6667 4.66659 12.7167 4.66659 14C4.66659 15.2834 5.71658 16.3334 6.99992 16.3334C8.28325 16.3334 9.33325 15.2834 9.33325 14Z" fill="#212529" />
              </svg>
              </span>
            </div>
            <div className="text-sm text-[#495057] font-medium pt-4 flex gap-30 items-center">
              <p className="flex items-center gap-1"><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6667 2.00001H10V0.666672H8.66667V2.00001H3.33333V0.666672H2V2.00001H1.33333C0.593333 2.00001 0.00666666 2.60001 0.00666666 3.33334L0 12.6667C0 13.4 0.593333 14 1.33333 14H10.6667C11.4 14 12 13.4 12 12.6667V3.33334C12 2.60001 11.4 2.00001 10.6667 2.00001ZM10.6667 12.6667H1.33333V5.33334H10.6667V12.6667ZM2.66667 6.66667H6V10H2.66667V6.66667Z" fill="#495057" />
              </svg>
                <span> Fri, 12 Oct, 2018</span>
              </p>
              <p className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99992 1.33333C5.41992 1.33333 3.33325 3.42 3.33325 6C3.33325 9.5 7.99992 14.6667 7.99992 14.6667C7.99992 14.6667 12.6666 9.5 12.6666 6C12.6666 3.42 10.5799 1.33333 7.99992 1.33333ZM4.66659 6C4.66659 4.16 6.15992 2.66666 7.99992 2.66666C9.83992 2.66666 11.3333 4.16 11.3333 6C11.3333 7.92 9.41325 10.7933 7.99992 12.5867C6.61325 10.8067 4.66659 7.9 4.66659 6Z" fill="#495057" />
                <path d="M7.99992 7.66666C8.92039 7.66666 9.66659 6.92047 9.66659 5.99999C9.66659 5.07952 8.92039 4.33333 7.99992 4.33333C7.07944 4.33333 6.33325 5.07952 6.33325 5.99999C6.33325 6.92047 7.07944 7.66666 7.99992 7.66666Z" fill="#495057" />
              </svg>
                <span> Ahmedabad, India</span>
              </p>
            </div>
            {/* Website Redirecter */}
            <div className="w-full flex items-center justify-center rounded-xl mt-4 border-gray-400 border-[1px] py-2 text-[#E56135]">
              <span className='font-semibold'>Visit Website</span>
            </div>
            <div className="w-full flex items-center justify-between py-4">
              <div className="w-full flex items-center gap-2">
                <img src={authorImg3} alt="author" className="w-[37px] h-[37px] rounded-full" />
                <p className="flex flex-col "><span className="text-base text-[#212529] font-semibold">Ronal Jones</span>
                  <span className="text-sm text-[#495057] font-medium">800 views</span>
                </p>
              </div>
              <div className=" bg-[#F1F3F5] rounded py-2 flex  cursor-pointer items-center  px-3 gap-1.5 text-black"><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#212529" />
              </svg> <span className="text-sm text-[#495057] font-medium">Share</span>
              </div>
            </div>
          </div>
        </div>
        {/* 4th Card */}
        <div className="w-full flex flex-col mt-4 shadow-md rounded-xl">
          <p className="text-base text-black font-medium px-4 py-2">{"💼️ Job"}</p>
          <div className="px-4">
            <div className="w-full flex items-center justify-between">
              <span className="text-xl text-black font-semibold leading-6">{"Software Developer - II"}</span>
              <span className=""><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6666 14C18.6666 15.2834 19.7166 16.3334 20.9999 16.3334C22.2833 16.3334 23.3333 15.2834 23.3333 14C23.3333 12.7167 22.2833 11.6667 20.9999 11.6667C19.7166 11.6667 18.6666 12.7167 18.6666 14ZM16.3333 14C16.3333 12.7167 15.2833 11.6667 13.9999 11.6667C12.7166 11.6667 11.6666 12.7167 11.6666 14C11.6666 15.2834 12.7166 16.3334 13.9999 16.3334C15.2833 16.3334 16.3333 15.2834 16.3333 14ZM9.33325 14C9.33325 12.7167 8.28325 11.6667 6.99992 11.6667C5.71659 11.6667 4.66659 12.7167 4.66659 14C4.66659 15.2834 5.71658 16.3334 6.99992 16.3334C8.28325 16.3334 9.33325 15.2834 9.33325 14Z" fill="#212529" />
              </svg>
              </span>
            </div>
            <div className="text-sm text-[#495057] font-medium pt-4 flex gap-30 items-center">
              <p className="flex items-center gap-1"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33325 3.00002V1.66668H5.66659V3.00002H8.33325ZM1.66659 4.33335V11.6667H12.3333V4.33335H1.66659ZM12.3333 3.00002C13.0733 3.00002 13.6666 3.59335 13.6666 4.33335V11.6667C13.6666 12.4067 13.0733 13 12.3333 13H1.66659C0.926585 13 0.333252 12.4067 0.333252 11.6667L0.339919 4.33335C0.339919 3.59335 0.926585 3.00002 1.66659 3.00002H4.33325V1.66668C4.33325 0.926684 4.92659 0.333351 5.66659 0.333351H8.33325C9.07325 0.333351 9.66659 0.926684 9.66659 1.66668V3.00002H12.3333Z" fill="#495057" />
              </svg>

                <span> Innovaccer Analytic...</span>
              </p>
              <p className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99992 1.33333C5.41992 1.33333 3.33325 3.42 3.33325 6C3.33325 9.5 7.99992 14.6667 7.99992 14.6667C7.99992 14.6667 12.6666 9.5 12.6666 6C12.6666 3.42 10.5799 1.33333 7.99992 1.33333ZM4.66659 6C4.66659 4.16 6.15992 2.66666 7.99992 2.66666C9.83992 2.66666 11.3333 4.16 11.3333 6C11.3333 7.92 9.41325 10.7933 7.99992 12.5867C6.61325 10.8067 4.66659 7.9 4.66659 6Z" fill="#495057" />
                <path d="M7.99992 7.66666C8.92039 7.66666 9.66659 6.92047 9.66659 5.99999C9.66659 5.07952 8.92039 4.33333 7.99992 4.33333C7.07944 4.33333 6.33325 5.07952 6.33325 5.99999C6.33325 6.92047 7.07944 7.66666 7.99992 7.66666Z" fill="#495057" />
              </svg>
                <span> Noida, India</span>
              </p>
            </div>
            {/* Website Redirecter */}
            <div className="w-full flex items-center justify-center rounded-xl mt-4 border-gray-400 border-[1px] py-2 text-[#02B875]">
              <span className='font-semibold'>Apply on Timesjobs</span>
            </div>
            <div className="w-full flex items-center justify-between py-4">
              <div className="w-full flex items-center gap-2">
                <img src={authorImg4} alt="author" className="w-[37px] h-[37px] rounded-full" />
                <p className="flex flex-col "><span className="text-base text-[#212529] font-semibold">Joseph Gray</span>
                  <span className="text-sm text-[#495057] font-medium">1.7k views</span>
                </p>
              </div>
              <div className=" bg-[#F1F3F5] rounded py-2 flex  cursor-pointer items-center  px-3 gap-1.5 text-black"><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#212529" />
              </svg> <span className="text-sm text-[#495057] font-medium">Share</span>
              </div>
            </div>
          </div>
          </div>
            </div>
          {/* Location Searcher for big devices  */}
          <div className="hidden md:block px-8 py-4">
            <div className='flex justify-between items-center gap-1 text-sm border-b-[1px] border-b-gray-400 py-2'><p className='flex'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_842)">
                <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="black" />
                <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1_842">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
              <span>Noida, India</span></p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_848)">
                  <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_1_848">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className='flex  gap-x-1 py-2'><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z" fill="black" />
            </svg>
              <span className='text-[12px]'>Your location will help us serve better and extend a personalised experience.</span></p>
          </div>
        
        </div>
      
    </div>
  )
}

export default PostSection
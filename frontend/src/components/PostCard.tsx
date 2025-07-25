
const PostCard = ({ postImage, postType, postTitle, postDescription, postAuthor, authorImg, postViews }: { postImage: string, postType: string, postTitle: string, postDescription: string, postAuthor: string, authorImg: string, postViews: string }) => {
    return (
        <div className="w-full flex flex-col mt-4 shadow-md">
            <div className="w-full h-[120px] relative mt-2 ">
                <img src={postImage} alt="post" className="w-full rounded-t h-full object-cover" />
            </div>
            <p className="text-base text-black font-medium px-4 py-2">{postType}</p>
            <div className="px-4">
                <div className="w-full flex items-center justify-between">
                    <span className="text-xl text-black font-semibold leading-6">{postTitle}</span>
                    <span className=""><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6666 14C18.6666 15.2834 19.7166 16.3334 20.9999 16.3334C22.2833 16.3334 23.3333 15.2834 23.3333 14C23.3333 12.7167 22.2833 11.6667 20.9999 11.6667C19.7166 11.6667 18.6666 12.7167 18.6666 14ZM16.3333 14C16.3333 12.7167 15.2833 11.6667 13.9999 11.6667C12.7166 11.6667 11.6666 12.7167 11.6666 14C11.6666 15.2834 12.7166 16.3334 13.9999 16.3334C15.2833 16.3334 16.3333 15.2834 16.3333 14ZM9.33325 14C9.33325 12.7167 8.28325 11.6667 6.99992 11.6667C5.71659 11.6667 4.66659 12.7167 4.66659 14C4.66659 15.2834 5.71658 16.3334 6.99992 16.3334C8.28325 16.3334 9.33325 15.2834 9.33325 14Z" fill="#212529" />
                    </svg>
                    </span>
                </div>
                <p className="text-sm text-[#495057] font-medium pt-4">{postDescription}</p>
                <div className="w-full flex items-center justify-between py-4">
                    <div className="w-full flex items-center gap-2">
                        <img src={authorImg} alt="author" className="w-[37px] h-[37px] rounded-full" />
                       <p className="flex flex-col "><span className="text-base text-[#212529] font-semibold">{postAuthor}</span>
                        <span className="text-sm text-[#495057] font-medium">{postViews}</span>
                        </p> 
                    </div>
                    <div className=" bg-[#F1F3F5] rounded py-2 flex  cursor-pointer items-center  px-3 gap-1.5 text-black"><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#212529" />
                    </svg> <span className="text-sm text-[#495057] font-medium">Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard

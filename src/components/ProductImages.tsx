"use client"
import { url } from "inspector"
import Image from "next/image"
import { useState } from "react"
import CommentSection from "./CommentSection"

const images =[
    {
        id:1,
        url:"https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:2,
        url:"https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:3,
        url:"https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:4,
        url:"https://images.pexels.com/photos/6210323/pexels-photo-6210323.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]

const ProductImages = () => {
const [index,setIndex]= useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
      <Image
       src="https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600"
       alt=""
       fill
       sizes="50vw"
       className="object-cover rounded-md"
       />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer">
             <Image
                src="https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt=""
                 fill
                 sizes="30vw"
                 className="object-cover rounded-md"
                 />
             </div>
        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer">
             <Image
                src="https://images.pexels.com/photos/1510529/pexels-photo-1510529.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt=""
                 fill
                 sizes="30vw"
                 className="object-cover rounded-md"
                 />
             </div>
        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer">
             <Image
                src="https://images.pexels.com/photos/3905906/pexels-photo-3905906.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt=""
                 fill
                 sizes="30vw"
                 className="object-cover rounded-md"
                 />
             </div>
      </div>

      <br /><br />
      <CommentSection />
    </div>
  )
}

export default ProductImages


"use client"

import Link from "next/link"
import Image from "next/image"

const CategoryList = () => {
  return (
    <div className="px-4  overflow-x-scroll scrollbar-hide">
        {/* this is custome class used to hide the scroll bar */}
     <div className="flex gap-4 md:gap-8">
       <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/28370135/pexels-photo-28370135/free-photo-of-denis.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Man</h1>
        </Link>
       <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/5128688/pexels-photo-5128688.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Women</h1>
        </Link>
       <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Kids</h1>
        </Link>
       <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">New Born</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/28370578/pexels-photo-28370578/free-photo-of-a-person-s-feet-are-up-in-the-air-with-their-shoes-on.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Shoe</h1>
        </Link>
       <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/28531265/pexels-photo-28531265/free-photo-of-stylish-man-in-black-tuxedo-with-sunglasses-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Groom</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/2086989/pexels-photo-2086989.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Bride</h1>
        </Link>
       <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Hats</h1>
        </Link>
       <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Makeup</h1>
        </Link>
       <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
       <div className="relative bg-slate-100 w-full h-96">
        <Image src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="" fill sizes="20vw" className="object-cover"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Watch</h1>
        </Link>
     </div>
    </div>
  )
}

export default CategoryList

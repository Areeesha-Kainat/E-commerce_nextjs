// "use client"

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import ProductList2 from "@/components/ProductList2"
import Slider from "@/components/Slider"
import { Suspense, useContext, useEffect } from "react"

const HomePage = async () => {
return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
        <ProductList 
        />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList2 />
      </div>
    </div>
  )
}

export default HomePage
import Add from "@/components/Add"
import CustomizeProduct from "@/components/CustomizeProduct"
import ProductImages from "@/components/ProductImages"

const SinglePage = () => {
  return (
    <div 
    className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">{/*horizontal*/}
       {/* IMAGE */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>
         {/* TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6"> {/*vertical*/}
      <h1 className="text-4xl font-medium">White Shirt</h1>
      <p className="text-gray-500">
      Elevate your wardrobe with our classic White Shirt.
       Crafted from premium, breathable cotton, this shirt 
       offers unmatched comfort and style. Its timeless design 
       features a tailored fit, button-down collar, and long sleeves,
        making it versatile for any occasion. Whether you’re dressing
        up for a business meeting or going for a casual look, this white
        shirt is your go-to choice for a polished, sophisticated appearance.
       Pair it with jeans or trousers for a sharp, clean look that never goes out of style.
      </p>
      <div className="h-[2px] bg-gray-100" />
      <div className="flex items-center gap-4">
        <h3 className="text-xl text-gray-500 line-through">$59</h3>
        <h2 className="font-medium text-2xl">$49</h2>
      </div>
      <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <Add />
      <div className="h-[2px] bg-gray-100" />
         <div className="text-sm">
          <h4 className="font-medium mb-4">Timeless White Shirt</h4>
          <p>
          Embrace classic style with our Timeless White Shirt. 
          Made from soft, breathable cotton, it offers a sleek,
           tailored fit that’s perfect for any occasion. Whether
            for work or a casual day out, this shirt delivers effortless
             elegance and comfort.
          </p>
         </div>
         <div className="text-sm">
          <h4 className="font-medium mb-4">Essential White Shirt</h4>
          <p>
          Elevate your wardrobe with the Essential White Shirt.
           Crafted from premium cotton, this shirt combines a 
           crisp design with ultimate comfort. Ideal for both 
           formal and casual wear, it’s a versatile staple that
            enhances any outfit.
          </p>
         </div>
        
        </div> 

    </div>
  )
}

export default SinglePage

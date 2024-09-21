// "use client"

// import Link from 'next/link';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const PRODUCT_PER_PAGE = 20;

// const ProductList = ({
//   categoryId,
//   limit,
// }: {
//   categoryId: string;
//   limit?: number;
// }) => {
//   const [products, setProducts] = useState<Array<{
//     id: string;
//     name: string;
//     price: number;
//     image1: string;
//     image2: string;
//     description: string;
//   }>>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         setError('Failed to fetch products');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
//       {products.slice(0, limit || PRODUCT_PER_PAGE).map((product) => (
//         <Link
//           key={product.id}
//           href={`/ProductImages`}
//           className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
//         >
//           <div className="relative w-full h-80">
//             <Image
//               src={product.image1}
//               alt={product.name}
//               fill
//               sizes="25vw"
//               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
//             />
//             <Image
//               src={product.image2}
//               alt={product.name}
//               fill
//               sizes="25vw"
//               className="absolute object-cover rounded-md"
//             />
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium">{product.name}</span>
//             <span className="font-semibold">${product.price}</span>
//           </div>
//           <div className="text-start text-gray-500">
//             <p>{product.description}</p>
//           </div>
//           <button className="rounded-2xl ring-1 ring-areesha text-areesha w-max py-2 px-4 text-xs hover:bg-areesha hover:text-white">
//             Add to Cart
//           </button>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductList;



"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PRODUCT_PER_PAGE = 4; // Show the first 4 products

const ProductList = () => {
  const [products, setProducts] = useState<Array<{
    id: string;
    name: string;
    price: number;
    image1: string;
    image2: string;
    description: string;
  }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.slice(0, PRODUCT_PER_PAGE).map((product) => (
        <Link
          key={product.id}
          href={`ProductImages`} 
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.image1}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
            />
            <Image
              src={product.image2}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
          <div className="text-start text-gray-500">
            <p>{product.description}</p>
          </div>
          <button className="rounded-2xl ring-1 ring-areesha text-areesha w-max py-2 px-4 text-xs hover:bg-areesha hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;

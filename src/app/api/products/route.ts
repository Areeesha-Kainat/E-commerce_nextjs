
import { NextResponse } from 'next/server';


const products = [
  {
    id: '1',
    name: 'White Shirt',
    price: 49,
    image1: 'https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600',
    image2: 'https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A stylish White t-shirt.',
  },
  {
    id: '2',
    name: 'T-shirt',
    price: 25,
    image1: 'https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=600',
    image2: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A casual Black t-shirt.',
  },
  {
    id: '3',
    name: 'ButtonUp Shirt',
    price: 13,
    image1: 'https://images.pexels.com/photos/3214768/pexels-photo-3214768.jpeg?auto=compress&cs=tinysrgb&w=600',
    image2: 'https://images.pexels.com/photos/28493282/pexels-photo-28493282/free-photo-of-relaxed-woman-in-casual-outfits-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A comfy white buttonup-shirt.',
  },
  {
    id: '4',
    name: 'Gown',
    price: 97,
    image1: 'https://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&w=600',
    image2: 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A Beautiful white gown.',
  },
  {
    id: '5',
    name: 'Red Blazer',
    price: 54,
    image1: 'https://images.pexels.com/photos/27308642/pexels-photo-27308642/free-photo-of-cielo.png?auto=compress&cs=tinysrgb&w=600',
    image2: 'https://images.pexels.com/photos/27308635/pexels-photo-27308635/free-photo-of-moda.png?auto=compress&cs=tinysrgb&w=600',
    description: 'A vibrant red blazer.',
  },
  {
    id: '6',
    name: 'feathers gown',
    price: 78,
    image1: 'https://images.pexels.com/photos/18079533/pexels-photo-18079533/free-photo-of-woman-posing-in-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    image2: 'https://images.pexels.com/photos/18079528/pexels-photo-18079528/free-photo-of-woman-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'A Beautiful feather gown.',
  },
  {
    id: '7',
    name: 'stylish jacket',
    price: 61,
    image1: 'https://images.pexels.com/photos/27239702/pexels-photo-27239702/free-photo-of-outfit.png?auto=compress&cs=tinysrgb&w=600',
    image2: 'https://images.pexels.com/photos/27239704/pexels-photo-27239704/free-photo-of-outfit.png?auto=compress&cs=tinysrgb&w=600',
    description: 'An ideal stylish jacket.',
  },
  {
    id: '8',
    name: 'Pantsuit',
    price: 97,
    image1: 'https://images.pexels.com/photos/27229997/pexels-photo-27229997/free-photo-of-moda.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
    image2: 'https://images.pexels.com/photos/27229994/pexels-photo-27229994/free-photo-of-moda.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
    description: 'A casual Pantsuit.',
  },
];

export async function GET() {
  return NextResponse.json(products);
}

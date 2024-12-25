import Image from "next/image";
import Link from "next/link";


export default async function Home() {

  const res = await fetch("https://jsonserver.reactbd.com/phone")


  interface IProduct {
    id: number;
    title: string;
    price: number;
    previousPrice: number;
    description: string;
    category: string;
    image: string;
    isNew: boolean;
    brand: string;
    quantity: number;
  }


  const Data: IProduct[] = await res.json()

  return (
      <div className="bg-BannerImg bg-repeat bg-cover bg-bottom w-full h-screen md:h-screen sm:h-[80vh]">
        
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {
        Data.map((items) => {
          return (
             <div className=" border-gray-400  overflow-hidden  cursor-pointer  "key={items.id}>
           <Image className="w-full h-80 object-contain" width={250} height={200} src={items.image} alt="" />
              <div className="px-5 pb-3 text-sm flex flex-col items-center gap-1">
              <Link href={`/product-details/${items.id}`}>      <h1 className="font-bold text-base py-1">{items.title}</h1> </Link>
              <h5 className="font-semibold">$ {items.price}</h5>
              <del className="text-red-700">$ {items.previousPrice}</del>
              </div>
              <div className="px-5 pb-3 text-sm  flex items-center justify-center">
                <button className="bg-cyan-900 rounded-lg px-16 py-2 text-white hover:bg-cyan-700">Add to Cart</button>
              </div>
            </div>
            
          )
        })
      }
    </div>
    </div>
  )

}

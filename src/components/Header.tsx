import Link from "next/link";

const Header = () =>{

    const navigation =[
        {
            id: 1,
            title: "Phone",
            href: "/",
        },
        {
            id: 2,
            title: "Phone Case",
            href: "/phonecase",
        },
        {
            id: 3,
            title: "Watches",
            href: "/watches",
        },
        {
            id: 4,
            title: "Accessories",
            href: "/accessories",
        },
        
    ];


    return(
        <div className="w-full h-20 bg-cyan-950 text-gray-200 sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto h-full items-center flex justify-center gap-10 ">
                {navigation.map((item) =>(
                   <Link 
                   href={item.href}
                   key={item.id}
                   className="text-sm hover:text-white duration-200"
                   >
                    {item.title}
                   </Link>
                ) )}
            </div>
        </div>
    )

}

export default Header
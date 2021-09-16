import Image from "next/image";
import  { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"


function Header() {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue-default p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
                    <Image 
                    src="https://links.papareact.com/f90"
                    width={150} height={40} objectFit='contain' className="cursor-pointer"
                    />

                </div>

                <div className="hidden rounded-md sm:flex bg-yellow-400 hover:bg-yellow-500 flex-grow items-center cursor-pointer h-10">
                    <input type="text" className=" p-2 h-full flex-grow w-6 rounded-l-md focus:outline-none px-4"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>

                <div className="flex text-white items-center space-x-6 text-xs mx-6 whitespace-nowrap">
                    <div className="link">
                       <p>Heloo welocome</p>
                       <p className="font-extrabold md:text-sm">Accounts & List</p>

                    </div>
                    <div className="link"> 
                        <p>Returns </p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 text-center bg-yellow-500 text-black rounded-full h-4 w-4 font-bold ">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
            </div>

            <div className="flex bg-amazon_blue-light text-sm text-white space-x-3 items-center">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>

                <p className="link">Todays deal</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>


            </div>
        </header>
    )
}

export default Header

const Navbar = () => {
    return ( 
        <header className=" grid grid-cols-2 px-2 py-6">
            <div className="flex gap-10"> 
                <span className="text-blue-500 text-2xl font-bold">MORENT</span>
                <div className="w-full border border-gray-300 rounded-full flex items-center justify-center px-4 py-1">
                    <input className="outline-none w-full" />
                </div>
            </div>
        </header>
     );
}
 
export default Navbar;
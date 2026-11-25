import { useState } from "react";
import { NavLink, Link } from "react-router";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
            <Link to="/" className="text-xl font-extrabold text-gray-900">
                ArticleWebsite
            </Link>
            <div className="hidden gap-6 items-center sm:flex">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/about">About</NavLink>

                <div className="flex gap-3 items-center">
                    <NavLink
                        to="/register"
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-700"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
            <div onClick={()=>setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2 border border-blue-400 rounded sm:hidden">
                <div className="w-5 h-0.5 bg-blue-600"></div>
                <div className="w-5 h-0.5 bg-blue-600"></div>
                <div className="w-5 h-0.5 bg-blue-600"></div>
            </div>

            <div className={`${isOpen ? 'flex':'hidden'} flex-col justify-center items-center p-4 bg-blue-400 gap-3 absolute left-0 top-16 w-full z-10 sm:hidden`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/about">About</NavLink>

                <div className="flex flex-col gap-3 items-center">
                    <NavLink
                        to="/"
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/"
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
            
        </nav>
    );
}
export default Navbar;
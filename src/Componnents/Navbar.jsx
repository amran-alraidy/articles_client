import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
     const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
            <Link to="/" className="text-xl font-extrabold text-gray-900">
                ArticleWebsite
            </Link>
            <div className="hidden sm:flex gap-6 items-center">
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <div className="flex gap-3 items-center">
                    <Link
                        to="/"
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg"
                    >
                        Register
                    </Link>
                    <Link
                        to="/"
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg"
                    >
                        Login
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-1.5 p-2 border border-blue-400 rounded sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                <div className="w-5 h-0.5 bg-blue-600"></div>
                <div className="w-5 h-0.5 bg-blue-600"></div>
                <div className="w-5 h-0.5 bg-blue-600"></div>
            </div>
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col justify-center items-center gap-3 bg-blue-400 p-4   absolute left-0 top-16 w-full z-10 sm:hidden`}>
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <div className="flex flex-col gap-3 items-center">
                    <Link
                        to="/"
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Register
                    </Link>
                    <Link
                        to="/"
                        className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
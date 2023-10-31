'use client'
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 fixed fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-white font-bold text-lg">John Espitia <span className={"hidden md:inline"}> - Software and Tech Solutions</span></h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <NavLink className={"text-gray-300 hover:bg-gray-700"} href="/">About Me</NavLink>
                            <NavLink href="/services" className={"text-gray-300 hover:bg-gray-700"} >My Services</NavLink>
                            <NavLink href="/contact" className={"text-gray-300 hover:bg-gray-700"} >Contact Me</NavLink>
                        </div>
                    </div>
                    <div className="flex md:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
};

interface NavLinkProps {
    href: string;
    children: string
    className: string
    onClick?: (event: React.MouseEvent) => void | null
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
    return (
        <Link className={`px-3 py-2 rounded-md text-sm font-medium ${className}`} href={href}>
                {children}
        </Link>
    );
};

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        console.log(`Menu open: ${isOpen}`)
        setIsOpen(!isOpen);
    };


    return (
        <div className="relative">
            <button
                type="button"
                className="bg-gray-900 p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded-md"
                onClick={toggleMenu}
            >
                <span className="sr-only">Open menu</span>
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            {isOpen && (
                <>
                <div className="w-full h-full bg-black opacity-50 absolute inset-0" onClick={toggleMenu}></div>

                <div className="fixed inset-0 flex z-10 transition-transform">
                <div className="w-full h-full bg-white shadow-lg transform transition-transform ease-out duration-300">
                        <div className="bg-gray-900 items-center justify-evenly flex">
                            <h1 className="space-y-8 text-white font-bold text-lg pt-3 ml-3 pb-3">Software and Tech Solutions</h1>
                            <button className="p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={toggleMenu}>
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <ul className="space-y-2">
                                <li>
                                    <NavLink href="/" onClick={toggleMenu} className="block text-black">About Me</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/services" onClick={toggleMenu} className="block text-black">My Services</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/contact" onClick={toggleMenu} className="block text-black">Contact Me</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
    );
};



export default NavBar;

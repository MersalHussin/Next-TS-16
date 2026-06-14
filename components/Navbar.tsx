"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container">
                <div className="flex justify-between items-center py-4">
                    <Link href='/' className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        🚀 Next.js Learn
                    </Link>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-2">
                        <li>
                            <Link className={isActive('/')} href='/'>
                                🏠 Home
                            </Link>
                        </li>
                        <li>
                            <Link className={isActive('/about')} href='/about'>
                                ℹ️ About
                            </Link>
                        </li>
                        <li>
                            <Link className={isActive('/blog')} href='/blog'>
                                📝 Blog
                            </Link>
                        </li>
                        <li>
                            <Link className={isActive('/contact')} href='/contact'>
                                📧 Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="hidden md:flex gap-2">
                        <Link href='/login' className="btn btn-secondary">
                            Login
                        </Link>
                        <Link href='/regstire' className="btn btn-primary">
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-2xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <ul className="flex flex-col gap-2 mb-4">
                            <li>
                                <Link className={isActive('/')} href='/' onClick={() => setMobileMenuOpen(false)}>
                                    🏠 Home
                                </Link>
                            </li>
                            <li>
                                <Link className={isActive('/about')} href='/about' onClick={() => setMobileMenuOpen(false)}>
                                    ℹ️ About
                                </Link>
                            </li>
                            <li>
                                <Link className={isActive('/blog')} href='/blog' onClick={() => setMobileMenuOpen(false)}>
                                    📝 Blog
                                </Link>
                            </li>
                            <li>
                                <Link className={isActive('/contact')} href='/contact' onClick={() => setMobileMenuOpen(false)}>
                                    📧 Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="flex flex-col gap-2">
                            <Link href='/login' className="btn btn-secondary w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                                Login
                            </Link>
                            <Link href='/regstire' className="btn btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

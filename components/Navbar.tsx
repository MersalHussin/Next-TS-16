"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname);

    const isActive= (path:string) =>{
        return pathname === path ? 'text-blue-500' : ''
    }


    return (
       <nav><ul className="flex justify-center items-center gap-1 bg-amber-50 py-5">
          <li>
            <Link className={isActive('/')} href='/'>
            Home
            </Link>
            </li>
          <li>
                        <Link className={isActive('/about')} href='/about'>

            About
            </Link>
          </li>
          <li>
                                <Link className={isActive('/contact')} href='/contact'>

            Contact
            </Link>
            </li>
          </ul>
          </nav>
    );
}

export default Navbar;

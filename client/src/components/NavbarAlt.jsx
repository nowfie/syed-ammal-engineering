import { useEffect, useState } from "react";
import { navItems } from "../utils/staticData";
import { FaBars } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import {motion} from "framer-motion"
const NavbarAlt = () => {

    const [nav,setNav] = useState(false)

    const [scroll,setScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          setScroll(window.scrollY > 50); 
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const currentPath = useLocation().pathname
      const navBarstyle = currentPath[1]?'bg-white':'bg-primary'
      const navTextstyle = currentPath[1]?'text-black':'text-white'
  return (
    <header className={`${scroll?' bg-primary':' bg-primary'} ${navBarstyle} fixed lg:relative py-8 ${currentPath[1]?'border-b border-gray-300':''} w-full top-0 z-30`}>
      <img src="/hero-pattern.webp" className={`${scroll?'  opacity-0 xl:opacity-100':''} ${currentPath[1]?'hidden':'block'} transition-all duration-500 absolute w-full top-0 h-fit -z-10`} alt="" />
      <nav className="">
        <div className="">
          <div className="main flex items-center justify-between">
            <div className="logo ">
              <h1 className={`!font-heading text-5xl capitalize ${navTextstyle}`}>logo</h1>
            </div>
            <div className="nav-items hidden lg:block ">
              <ul className={`flex space-x-16 ${navTextstyle} capitalize items-center font-medium justify-between`}>
                {navItems.row1.map((item, index) => (
                  <li key={index}><Link to={item.path}>{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="">
                <motion.button whileTap={{scale:.8}} onClick={()=>setNav(!nav)}>
                    {!nav?(
                        <FaBars className={`${navTextstyle} text-3xl `} />
                    ):(
                        <CgClose className={`${navTextstyle} text-3xl `} />
                    )}
                </motion.button>
            </div>
            

          </div>
        </div>
        <div className=" ">
              <div className={`row-2 bg-white w-[50%] ease-in-out h-screen transform ${nav ? 'translate-x-0' : '-translate-x-full'} absolute top-0 left-0  transition-all duration-300`}>
                <ul className={`flex flex-col space-x-16 !text-primary ${navTextstyle} capitalize font-medium justify-between`}>
                  {navItems.row1.map((item, index) => (
                    <li key={index}><Link to={item.path}>{item.name}</Link></li>
                  ))}
                </ul> 
              </div>
            </div>
        <div className="w-10/12 p-[0.1px] absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100 opacity-20"></div>
      </nav>
    </header>
  );
};

export default NavbarAlt;

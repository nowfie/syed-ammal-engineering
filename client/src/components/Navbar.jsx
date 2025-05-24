import { CiSearch } from "react-icons/ci"
import {  navItems } from "../utils/staticData"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [scroll,setScroll] = useState(false)
    useEffect(()=>{
        const handleScroll = () =>{
            setScroll(window.screenY>50)
        }

        window.addEventListener('scroll',handleScroll)
        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
  return (
    <header className={` ${scroll?' bg-primary':' bg-transparent'} fixed border-b border-primary/40  w-full top-0 z-40`}>
        <nav className=" space-y-10">
            <div className="row-1 py-5 bg-secondary">
                <div className="nav-items main">
                    <ul className="flex text-white capitalize items-center justify-between">
                        {navItems.row2.map((item,index)=>(
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row-2 ">
                <div className="main flex items-center">
                    <div className="logo w-1/4">
                        {/* <h1 className="!font-heading capitalize text-white">logo</h1> */}
                    </div>
                    <div className="nav-items w-3/4">
                        <ul className="flex text-white capitalize items-center justify-between">
                            {navItems.row1.map((item,index)=>(
                                <li key={index}>{item.name}</li>
                            ))}
                            <li><CiSearch className=" text-2xl"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import Line from "../components/Line";

const BlogSection = () => {

    const BlogMain = () =>{
        return(
            <div className=" relative h-[26.2rem] overflow-hidden group">
                <img src="/blog.webp" className="absolute w-full group-hover:scale-105 transition-all duration-300 -z-10 h-full object-cover" alt="Blog" />
                <div className="absolute w-full top-0 bg-black h-full -z-10 opacity-50"></div>
                <div className="content absolute bottom-0 space-y-4 bg-transparent p-8">
                    <div className="meta-data flex gap-4">
                        <h3 className=" capitalize text-white flex items-center gap-4"> <FaRegUser className=" text-sm"/> admin</h3>
                        <h3 className=" capitalize text-white flex items-center gap-4"> <CiCalendar/> may 11, 2025</h3>
                    </div>
                    <Link to={'/blog/1'} className="!font-heading capitalize text-4xl !z-30 text-white font-medium">After Decades Of Improvement, Cardiovascular Health Rates.</Link>
                </div>
            </div>
        )
    }

    const BlogSub = () =>{
        return(
            <div className="flex flex-col md:flex-row gap-4 border group border-gray-100">
                <div className=" relative md:w-[30%] overflow-hidden">
                    <img src="/blog.webp" className=" transition-all duration-300 group-hover:scale-105 absolute top-0 w-full h-full object-cover " alt="" />
                </div>
                <div className="content md:w-[70%] space-y-3 m-auto  p-4">
                    <div className="meta-data flex gap-4">
                        <h3 className=" capitalize text-black text-xs flex items-center gap-4"> <FaRegUser className=" text-sm"/> admin</h3>
                        <h3 className=" capitalize text-black text-xs flex items-center gap-4"> <CiCalendar/> may 11, 2025</h3>
                    </div>
                    <p className="!font-heading capitalize text-xl text-black font-medium">After Decades Of Improvement, Cardiovascular Health Rates.</p>
                </div>
            </div>
        )
    }

  return (
    <section className=' py-28'>
            <div className="main space-y-10">
                <div className="header flex flex-col lg:flex-row gap-14 ">
                    <div className="lg:w-1/2">
                        <h1 className="heading">latest news & <br /> blogs</h1>
                    </div>
                    <div className="lg:w-1/2 space-y-7">
                        <p className=' text-paragraph leading-relaxed'>Whether you’re considering a foundation course or an undergraduate academics is a place.</p>
                        <Link to='/' className=' text-primary font-semibold capitalize flex gap-2 items-center underline underline-offset-4'>view all <GoArrowUpRight/> </Link>
                    </div>
                </div>
                <Line/>
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-1/2">
                        <BlogMain/>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-between">
                        <BlogSub/>
                        <BlogSub/>
                        <BlogSub/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default BlogSection
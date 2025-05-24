import { PiGraduationCap } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdMove } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className=" bg-primary pt-48 lg:pt-22  pb-28 relative flex justify-center items-center">
      {/* <img src="hero-pattern.webp" className=" absolute w-full top-0 h-full" alt="" /> */}
        <div className="main flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 space-y-10">
            <div className="content space-y-5">
              <h3 className=" text-white capitalize flex items-center gap-3 "> <PiGraduationCap className=" text-xl"/> knowledge meets innovation</h3>
              <h1 className=" !font-heading uppercase text-8xl font-semibold text-white">syed ammal</h1>
              <p className=" text-white capitalize leading-relaxed">Be a part of an ecosystem that fosters exploring and shaping your future through transformative education</p>
            </div>
            <div className="btns flex gap-9 items-center ">
              <Link to={'/'} className=" text-white border border-gray-100/30 !font-heading p-4 font-medium  rounded-xl capitalize flex items-center gap-4">explore now <IoMdMove/> </Link>
              <Link to={'/'} className=" text-white !font-heading capitalize font-medium flex items-center gap-3">admission 2025 <FaAngleRight/> </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img src="/chewch2.png" className=" w-full rotate-[-149.5deg] absolute -top-24 right-0" alt="" />
          </div>
        </div>
    </section>
  )
}

export default HeroSection
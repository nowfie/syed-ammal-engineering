import { GoArrowUpRight } from 'react-icons/go'
import { PiGraduationCap } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const HeroSectionAlt = () => {
  return (
    <section className=" bg-primary pt-48 lg:pt-22  pb-44 relative flex justify-center items-center">
          {/* <img src="hero-pattern.webp" className=" absolute w-full top-0 h-full" alt="" /> */}
            <div className="main flex z-40 flex-col justify-center items-center">
              <div className=" space-y-10">
                <div className="content space-y-7">
                  <h3 className=" text-white capitalize flex items-center gap-3 "> <PiGraduationCap className=" text-xl"/> knowledge meets innovation</h3>
                    <div className=" space-y-4">   
                        <h1 className=' !font-heading uppercase text-7xl lg:text-9xl font-semibold text-white my-auto'>syed</h1> 
                        <div className="flex flex-col lg:flex-row items-center gap-9 relative lg:left-10">
                            <div className=" hidden lg:flex bg-primary border border-white w-fit p-2  rounded-full text-white items-center justify-center">
                                <GoArrowUpRight className=" absolute text-2xl"/>
                                <svg width="100" height="100" viewBox="0 0 200 200" className="">
                                    <defs>
                                        <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                                    </defs>
                                    <text fill="white">
                                        <textPath href="#circlePath" className="!font-heading font-semibold text-2xl" startOffset="50%" textAnchor="middle">
                                        * More than 25 years of experience * est 1998
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <h1 className='!font-heading  uppercase text-7xl lg:text-9xl font-semibold text-white'>ammal</h1> 
                        </div>
                        <div className="flex lg:hidden">
                            <img src="arrow-1.png" className='relative bottom-10' alt="" />
                            <div className="flex ml-8 my-7 bg-primary border border-white w-fit p-2  rounded-full text-white items-center justify-center">
                                <GoArrowUpRight className=" absolute text-2xl"/>
                                <svg width="100" height="100" viewBox="0 0 200 200" className="">
                                    <defs>
                                        <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                                    </defs>
                                    <text fill="white">
                                        <textPath href="#circlePath" className="!font-heading font-semibold text-2xl" startOffset="50%" textAnchor="middle">
                                        * More than 25 years of experience * est 1998
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <p className=" text-white capitalize text-center leading-relaxed relative lg:w-[60%] lg:left-44">Be a part of an ecosystem that fosters exploring and shaping your future through transformative education</p>
                    </div>
                </div>
              </div>
              <div className="btn">
              <img src="arrow-1.png" className=' w-[60%] hidden lg:block relative top-5' alt="" />
              <Link to={'/'} className=" border border-white font-medium text-white capitalize !font-heading p-4 relative lg:left-24 top-14 lg:top-0">explore now</Link>
              </div>
            </div>
        </section>
  )
}

export default HeroSectionAlt
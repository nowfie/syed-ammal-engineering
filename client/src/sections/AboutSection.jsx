import { GoArrowUpRight } from "react-icons/go";
import {Link} from 'react-router-dom'

const AboutSection = () => {
  return (
    <section className=" py-32 overflow-x-hidden">
        <div className="main flex flex-col lg:flex-row gap-14">
            <div className="lg:w-1/2 relative flex justify-center items-center">
                <img src="/about.webp" className="" alt="" />
                <div className=" absolute">
                    <div className=" relative  bg-primary border border-white p-2 m-auto rounded-full text-white flex items-center justify-center">
                        <GoArrowUpRight className=" absolute text-2xl"/>
                        <svg width="120" height="120" viewBox="0 0 200 200" className="">
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

            </div>
            <div className="lg:w-1/2 space-y-14">
                <div className="header">
                    <h1 className=" heading uppercase ">OUR autonomous institution</h1>
                </div>
                <p className=" text-paragraph leading-relaxed">At University Unipix, we believe in the transformative power of education and the boundless potential within every individual. Established in 1971, we have been dedicated to fostering intellectual curiosity, academic excellence, and a vibrant campus community.</p>
                <h2 className="stroked-text uppercase text-7xl  font-bold">est. 1998</h2>
                <Link to='/' className=' text-primary font-semibold capitalize flex gap-2 items-center underline underline-offset-4'>visit our programme <GoArrowUpRight/> </Link>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { BsQuote, BsTags } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { CgCalendarDates } from 'react-icons/cg';

const ResearchDetail = () => {
    // eslint-disable-next-line no-unused-vars
    const {id} = useParams()

    const DetailCol =()=>{
        return(
            <div className="xl:w-[65%] space-y-8">
                <section className=''>
                    <div className=" space-y-5">
                        <img src="/blog.webp" alt="" className=' ' />
                        <div className="meta-info text-paragraph flex items-center gap-5 capitalize">
                            <h2 className='flex gap-2 items-center'><FaRegUserCircle className=' text-primary'/>admin</h2>
                            <h2 className='flex gap-2 items-center'><CgCalendarDates  className=' text-primary'/>july 4, 2024</h2>
                            <h2 className='flex gap-2 items-center'><BsTags   className=' text-primary'/>university</h2>
                        </div>
                    </div>
                </section>
                <section className=''>
                    <div className=" space-y-8">
                        <div className="space-y-3">
                            <h1 className="!font-heading font-medium text-heading text-4xl capitalize">10 Effective Study Tips for College Success</h1>
                            <p className=' paragraph'>Welcome to Unipix! As a student, navigating through college can sometimes feel overwhelming. However, with the right strategies and study techniques, you can enhance your learning experience and achieve academic success. In this blog post, we’ll explore 10 effective study tips to help you thrive in college.</p>
                        </div>
                        <div className="space-y-3">
                            <h1 className=" text-3xl font-medium text-heading !font-heading capitalize">study Tips for College Success</h1>
                            <p className=' paragraph'>Welcome to Unipix! As a student, navigating through college can sometimes feel overwhelming. However, with the right strategies and study techniques, you can enhance your learning experience and achieve academic success. In this blog post, we’ll explore 10 effective study tips to help you thrive in college.</p>
                        </div>
                        <div className="space-y-3">
                            <h1 className=" text-3xl font-medium text-heading !font-heading capitalize">study Tips for College Success</h1>
                            <p className=' paragraph'>Welcome to Unipix! As a student, navigating through college can sometimes feel overwhelming. However, with the right strategies and study techniques, you can enhance your learning experience and achieve academic success. In this blog post, we’ll explore 10 effective study tips to help you thrive in college.</p>
                        </div>
                        <div className=" p-16 bg-foreground  flex flex-col justify-center items-center space-y-5">
                            <span className='p-3 rounded-full bg-primary flex w-fit text-white '><BsQuote className='text-4xl'/></span>
                            <p className=' text-center leading-relaxed'>At Unipix, we understand the transformative power of education, and we’re committed to making learning accessible, engaging, and impactful for everyone. Here’s how Unipix can help you on your education journey:</p>
                            <h4 className=' text-center italic font-bold mt-5'>Maria Sarapoba</h4>
                        </div>
                        <p className=' paragraph'>Welcome to Unipix! As a student, navigating through college can sometimes feel overwhelming. However, with the right strategies and study techniques, you can enhance your learning experience and achieve academic success. In this blog post, we’ll explore 10 effective study tips to help you thrive in college.</p>

                    </div>
                </section>
            </div>
        )
    }

    const FilterCol = ()=>{
        const RecentBox = () =>{
            return(
                <div className="flex gap-2 items-center">
                    <div className=" w-[40%] h-20 relative overflow-hidden">
                        <img src="/blog.webp" className=' absolute w-full' alt="" />
                    </div>
                    <div className=" p-3">
                        <h1 className=' line-clamp-2 !font-heading text-lg font-medium text-heading capitalize'>study tips fo college saec</h1>
                    </div>
                </div>
            )
        }

        const CategoryBox =()=>{
            return(
                <div className="flex">
                        <h2 type="text" placeholder='search latest news' className='w-full capitalize p-3 bg-white text-paragraph' >category 1</h2>
                        <button className=' bg-primary text-white p-3 text-xl'><IoSearchSharp/></button>
                    </div>
            )
        }
        return(
            <div className="xl:w-[35%] space-y-8">
                <section>
                    <div className="flex bg-foreground p-8 ">
                        <input type="text" placeholder='search latest news' className='w-full capitalize p-3 bg-white' />
                        <button className=' bg-primary text-white p-3 text-xl'><IoSearchSharp/></button>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-6 bg-foreground p-8 ">
                        <h1 className=' !font-heading text-2xl capitalize font-semibold text-heading'>recent post</h1>
                        <div className="flex flex-col gap-3">
                            {Array.from({length:3}).map((_,index)=>(
                                <RecentBox key={index}/>
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-6 bg-foreground p-8 ">
                        <h1 className=' !font-heading text-2xl capitalize font-semibold text-heading'>recent post</h1>
                        <div className="flex flex-col gap-3">
                            {Array.from({length:3}).map((_,index)=>(
                                <CategoryBox key={index}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
  return (
    <main>
        <Header/>
        <div className="detail main flex flex-col xl:flex-row py-12 gap-14">
            <DetailCol/>
            <FilterCol/>
        </div>
    </main>
  )
}

export default ResearchDetail
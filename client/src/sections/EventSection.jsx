import { BsTags } from 'react-icons/bs'
import { CgCalendarDates } from 'react-icons/cg'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { SwiperSlide ,Swiper} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventSection = () => {

    const EventBox = () =>{
        return(
            <div className="flex flex-col gap-4 group">
                <div className="relative  overflow-hidden ">
                    <img src="/blog.webp" className="duration-300 transition-all group-hover:scale-105 top-0 w-full h-fit object-cover" alt="" />
                </div>
                <div className="content space-y-2 text-sm">
                    <div className="meta-info text-heading flex items-center gap-5 capitalize">
                        <h2 className='flex gap-2 items-center'><CgCalendarDates  className=' text-heading'/>july 4, 2024</h2>
                        <h2 className='flex gap-2 items-center'><BsTags   className=' text-heading'/>university</h2>
                    </div>
                    <h1 className='!font-heading capitalize text-2xl leading-snug text-heading font-medium'>Exploring Environmental Frontiers Unveiling Insights</h1>
                </div>
                <Link to={'/'} className=' hover:bg-primary hover:border-primary hover:rotate-45 duration-300 transition-all hover:text-white rounded-full w-fit p-3 border border-heading text-heading text-2xl'><GoArrowUpRight/></Link>
            </div>
        )
    }

  return (
    <section className=' py-28'>
        <div className="main space-y-20">
            <div className="header flex flex-col lg:flex-row gap-14 items-center">
                <div className="lg:w-1/2">
                    <h1 className="heading">upcoming events</h1>
                </div>
                <div className="lg:w-1/2 space-y-7 me-auto">
                    {/* <p className=' text-paragraph leading-relaxed'>Dive Into The Vast Array Of Courses Offered At Our University, Spanning Across 10+ Specializations. Embrace An Educational Journey That Ignites Intellectual Curiosity And Nurtures Intuitive Learning Among Our Students.</p> */}
                    <Link to='/' className='ms-auto w-fit text-primary font-semibold capitalize flex gap-2 items-center underline underline-offset-4'>view all <GoArrowUpRight/> </Link>
                </div>
            </div>
            {/* <div className="flex flex-col lg:flex-row gap-7">
                <EventBox/>
                <EventBox/>
                <EventBox/>
            </div> */}
            <div className="">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 3,
                },
                //!h-[25rem] md:!h-[35rem] lg:!h-[27rem] xl:!h-full
                }}
                className=" "
                >
                    {Array.from({length:6}).map((item, index) => (
                    <SwiperSlide key={index} className='  !overflow-hidden'>
                        <EventBox item={item} />
                    </SwiperSlide>
                    ))}
                </Swiper>            
            </div>
        </div>
    </section>
  )
}

export default EventSection
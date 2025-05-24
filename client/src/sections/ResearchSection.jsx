import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ResearchSection = () => {

    const ResearchBox = () =>{
        return(
            <div className="flex flex-col gap-4 ">
                <div className="relative  overflow-hidden">
                    <img src="/blog.webp" className="  top-0 w-full h-fit object-cover" alt="" />
                </div>
                <div className="content">
                    <Link to={'/research/1'} className='!font-heading capitalize text-2xl leading-snug text-black font-medium'>Exploring Environmental Frontiers Unveiling Insights</Link>
                    <p className=' capitalize text-paragraph leading-relaxed mt-3 line-clamp-2'>The American Journal of Applied Scientific Research (AJASR): A Rigorous Peer-Reviewed Platform.</p>
                </div>
            </div>
        )
    }

  return (
    <section className=' py-28'>
        <div className="main space-y-20">
            <div className="header flex flex-col lg:flex-row gap-14">
                <div className="lg:w-1/2">
                    <h1 className="heading">publication & research</h1>
                </div>
                <div className="lg:w-1/2 space-y-7">
                    <p className=' text-paragraph leading-relaxed'>Dive Into The Vast Array Of Courses Offered At Our University, Spanning Across 10+ Specializations. Embrace An Educational Journey That Ignites Intellectual Curiosity And Nurtures Intuitive Learning Among Our Students.</p>
                    <Link to='/' className=' text-primary font-semibold capitalize flex gap-2 items-center underline underline-offset-4'>view all <GoArrowUpRight/> </Link>
                </div>
            </div>
            <div className="transition-all relative w-full duration-300 text-heading">
          
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
                    slidesPerView: 2,
                },
                //!h-[25rem] md:!h-[35rem] lg:!h-[27rem] xl:!h-full
                }}
                className=" !overflow-visible"
                >
                    {Array.from({length:6}).map((item, index) => (
                    <SwiperSlide key={index} className='  !overflow-hidden'>
                        <ResearchBox item={item} />
                    </SwiperSlide>
                    ))}
                </Swiper>            
            </div> 
        </div>
    </section>
  )
}

export default ResearchSection
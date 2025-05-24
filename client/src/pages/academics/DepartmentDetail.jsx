import Header from "../../components/Header"
import {  useParams } from "react-router-dom"
import DepartmentQuick from "../../components/DepartmentQuick"
import IntroHead from "../../components/IntroHead"
import { PiQuotesThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

const DepartmentDetail = () => {
    const {programmeName,department} = useParams()


      const DetailSection = () =>{
        return(
          <section className="py-12">
            <div className=" space-y-10">
              <img src="/blog.webp" className="w-full" alt="" />
              <div className="about-content">
                <h1 className=" !font-heading text-heading capitalize text-4xl font-medium mb-5">about the program</h1>
                <div className=" space-y-6">
                  {Array.from({length:2}).map((_,index)=>(
                    <p key={index} className=" paragraph">The Department of English, under the Faculty of Arts & Social Sciences (FA), started its journey with two predominant visions: first, to enhance and nourish students’ mental, ethical, and creative facets of their personality; secondly, to prepare themselves for efficient professional and technical employment in future. There can be no denying that ethics, values, morality and creativity are the essential ingredients of nation-building.</p>  
                  ))}
                </div>  
              </div>
            </div>
          </section>
        )
      }

      const TestimonialSection = () =>{
        const ReviewBox = () =>{
          return(
            <div className=" bg-foreground p-10 space-y-7">
                <div className="flex gap-2 text-primary">
                  {Array.from({length:5}).map((_,index)=>(
                    <FaStar key={index}/> 
                  ))}
                </div>
                <p className="paragraph !text-heading italic">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center ">
                    <div className=" p-6 rounded-full bg-heading">

                    </div>
                    <div className="">
                      <h1 className=" !font-heading text-xl text-heading capitalize mb-1">student name</h1>
                      <h2 className=" text-heading capitalize text-xs">batch 2021 - 2025</h2>
                    </div>
                  </div>
                  <PiQuotesThin className=" text-7xl text-primary"/>
                </div>
            </div>
          )
        }
        return(
            <section className=" py-4">
                <div className="">
                    <h1 className=" !font-heading text-heading capitalize text-4xl font-medium !mb-10">student testimonials</h1>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ReviewBox/>
                      <ReviewBox/>
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
                          slidesPerView: 2,
                      },
                      //!h-[25rem] md:!h-[35rem] lg:!h-[27rem] xl:!h-full
                      }}
                      className=" "
                      >
                          {Array.from({length:6}).map((item, index) => (
                          <SwiperSlide key={index} className='  !overflow-hidden'>
                              <ReviewBox item={item} />
                          </SwiperSlide>
                          ))}
                      </Swiper>  
                    </div>
                </div>
            </section>
        )
      }

  return (
    <main>
        <Header/>
        <IntroHead/>
        <div className="main flex flex-col justify-between xl:flex-row gap-10">
            <div className="xl:w-[70%]">
                <DetailSection/>
                <TestimonialSection/>
            </div>
            <div className="xl:w-[30%]">
                <DepartmentQuick programmeName={programmeName} department={department}/>
            </div>
        </div>
    </main>
  )
}

export default DepartmentDetail
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import IntroHead from '../../components/IntroHead'
import QuickLink from '../../components/QuickLink'
import FaqSection from '../../sections/FaqSection'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from 'react-icons/go'

const Students = () => {
    
    const DetailSection = () =>{
        return(
          <section className="py-12">
            <div className="main space-y-10">
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

      const CoCurriculamSection =() =>{

        const campusData = [
                {
                    name:'elite club',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorem.',
                    to:'/student/club/1'
                },
                {
                    name:'tamil sangam',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorem.',
                    to:'/student/club/1'
                },
                {
                    name:'RMSE club',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorem.',
                    to:'/student/club/1'
                },
            ]
        
            const CoCurriculamBox = ({item}) =>{
                return(
                    <div className="border border-gray-300 group p-5 relative flex items-center justify-between overflow-hidden">
                        <img src="/blog.webp" className=" opacity-0 -translate-x-50 group-hover:translate-x-0 brightness-50 left-0 group-hover:opacity-100 duration-700 transition-all absolute top-0 object-cover w-full h-full" alt="" />
                        <div className=" space-y-4 w-[60%] z-40">
                            <h1 className="!font-heading capitalize group-hover:text-white duration-300 transition-all font-medium text-3xl text-heading">{item.name}</h1>
                        </div>
                        <Link to={item.to} className=" p-4 z-40 border group-hover:text-white duration-300 transition-all border-gray-400 rounded-full text-xl"><GoArrowUpRight/></Link>
                    </div>
                )
            }
        
            CoCurriculamBox.propTypes = {
                item:PropTypes.object
            }

        return(
            <section className='py-12'>
                <div className="main">
                    <h1 className=" !font-heading capitalize text-2xl font-medium mb-5 text-heading">co curriculam</h1>
                    <p className=" paragraph">The Department of English, under the Faculty of Arts & Social Sciences (FA), started its journey with two predominant visions: first, to enhance and nourish students’ mental, ethical, and creative facets of their personality; secondly, to prepare themselves for efficient professional and technical employment in future. There can be no denying that ethics, values, morality and creativity are the essential ingredients of nation-building.</p>  
                     <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8">
                        {campusData.map((item,index)=>(
                            <CoCurriculamBox item={item} key={index}/>
                        ))}
                     </div>
                </div>
            </section>
        )
      }

      const ExtraCurriculamSection =() =>{
        return(
            <section className='py-12'>
                <div className="main">
                    <h1 className=" !font-heading capitalize text-2xl font-medium mb-7 text-heading">extra curriculam</h1>    
                    <p className=" paragraph">The Department of English, under the Faculty of Arts & Social Sciences (FA), started its journey with two predominant visions: first, to enhance and nourish students’ mental, ethical, and creative facets of their personality; secondly, to prepare themselves for efficient professional and technical employment in future. There can be no denying that ethics, values, morality and creativity are the essential ingredients of nation-building.</p>  
                     
                </div>    
            </section>
        )
      }

      const FacilitySection =() =>{

        const FacilityBox = ({index}) =>{
            return(
                <div className={`flex ${index % 2 == 0?' flex-row-reverse':''} gap-5 items-center border border-gray-200`}>
                    <div className="xl:w-1/2 relative h-[300px] overflow-hidden">
                        <img src="/blog.webp" className=' absolute object-cover' alt="" />
                    </div>
                    <div className="xl:w-1/2 p-7">
                        <h1 className=' !font-heading capitalize text-heading text-4xl font-medium mb-6'>networks and labs</h1>
                        <p className=' paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ullam, nam a saepe earum est dolores facere esse magni nulla consequatur praesentium vel qui quas, dolorem expedita similique? Recusandae praesentium explicabo voluptatum sequi! Non, in.</p>
                    </div>
                </div>
            )
        }

        FacilityBox.propTypes = {
            index:PropTypes.number
        }

        return(
            <section>
                <div className="main">
                    <h1 className=" !font-heading capitalize text-2xl font-medium mb-7 text-heading">facilities</h1>    
                    <div className=" space-y-7">
                        {Array.from({length:6}).map((_,index)=>(
                            <FacilityBox key={index} index={index}/>
                        ))}
                    </div>
                </div>    
            </section>
        )
      }

  return (
    <main>
        <Header/>
        <IntroHead/>
        <DetailSection/>
        <CoCurriculamSection/>
        <ExtraCurriculamSection/>
        <FacilitySection/>
        <div className="flex main flex-col xl:flex-row gap-10">
            <div className="xl:w-[70%]">
                <FaqSection/>
            </div>
            <div className="xl:w-[30%]">
                <QuickLink/>
            </div>
        </div>
    </main>
  )
}

export default Students
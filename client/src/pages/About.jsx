import { Link } from 'react-router-dom'
import Header from '../components/Header'
import IntroHead from '../components/IntroHead'
import { GoArrowUpRight } from 'react-icons/go'
import RecordSection from '../sections/RecordSection'
import OffcialsSection from '../sections/OffcialsSection'

const About = () => {
  

    const AbstractSection = () =>{
        const AbstractBox = () =>{
            return(
                <div className=" p-8 text-white bg-primary space-y-3">
                    <h2 className=' !font-heading text-5xl font-medium'>20,000</h2>
                    <h3>undergraduate and graduate students</h3>
                </div>
            )
        }
        return(
            <section className="py-12">
                <div className="main flex flex-col xl:flex-row gap-7 h-[500px]">
                    <div className="xl:w-[65%]">
                    <img src="/blog.webp" alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="xl:w-[45%] flex flex-col justify-between h-full">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <AbstractBox key={index} />
                    ))}
                    </div>
                </div>
            </section>

        )
    }

    const HistorySection =() =>{
        return(
            <section className="pt-12 pb-28">
                <div className="main space-y-24">
                    <div className="flex flex-col xl:flex-row items-center gap-16">
                        <div className="xl:w-1/2">
                            <img src="/blog.webp" className='' alt="" />
                        </div>
                        <div className="xl:w-1/2">
                            <h1 className=' sub-heading mb-10'>The history of Unipix</h1>
                            <ul className=' space-y-6 paragraph'>
                                {Array.from({length:2}).map((_,index)=>(
                                    <li key={index}>On September 8, 1971, Unipix, the first college in the American colonies, was founded in Cambridge, Massachusetts. Unipix University was officially founded by a vote by the Great and General Court of the Massachusetts Bay Colony.</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


    const CampusTour =() =>{
        return(
            <section className="py-12">
                <div className="main flex flex-col gap-7 justify-between items-center">
                    <h1 className='sub-heading '>our campus tour</h1>    
                    <img src="/blog.webp" className=' w-full h-[500px] object-cover' alt="" />
                    <p className='paragraph text-center xl:px-16'>Embark on a journey of knowledge, discovery, and growth at Unipix University. Our admissions process is designed to identify bright, motivated individuals who are eager to contribute to our dynamic academic community. Whether you’re a recent high school graduate or a transfer student seeking a new academic home, we invite you to explore the possibilities that await you.</p>
                    <Link to='/' className=' text-primary font-semibold capitalize flex gap-2 items-center underline underline-offset-4'>visit campus <GoArrowUpRight/> </Link>
                </div>
            </section>
        )
    }

    const MissionVision = () =>{
        const MissionBox = () =>{
            return(
                <div className="flex flex-col items-end text-right">
                    <h3 className="text-2xl !font-heading text-heading mb-6">Diversity</h3>
                    <p className="text-gray-600 max-w-sm mb-8">
                    Celebrating a rich tapestry of backgrounds, perspectives, and talents
                    </p>
                    <img
                    src="/blog.webp"
                    alt="Diversity"
                    className=" shadow-lg w-full object-cover h-[330px]"
                    />
                </div>
            )
        }

        const VisionBox = () =>{
            return(
                <div className="flex flex-col items-start text-left">
                    <h3 className="text-2xl !font-heading text-heading mb-6">Excellence</h3>
                    <p className="text-gray-600 max-w-sm mb-8">
                    Striving for academic and research excellence in all endeavors.
                    </p>
                    <img
                    src="/blog.webp"
                    alt="Excellence"
                    className=" shadow-lg w-full object-cover h-[330px]"
                    />
                </div>
            )
        }
        return(
            <section className="py-12">
                <div className="main space-y-10">
                    <h1 className='sub-heading xl:text-center'>mission & vision</h1>
                    <div className="flex flex-col xl:flex-row">
                        <div className="xl:w-1/2 space-y-20 xl:pr-28 xl:pt-16 ">
                            {Array.from({length:3}).map((_,index)=>(
                                <MissionBox key={index}/>
                            ))}
                        </div>
                        <div className="xl:w-1/2 space-y-20 xl:pl-28 border-l border-gray-200">
                            {Array.from({length:3}).map((_,index)=>(
                                <VisionBox key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
  return (
    <main>
        <Header/>
        <IntroHead/>
        <AbstractSection/>
        <HistorySection/>
        <RecordSection/>
        <MissionVision/>
        <OffcialsSection/>
        <CampusTour/>
    </main>
  )
}

export default About
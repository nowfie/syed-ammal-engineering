import { Link } from 'react-router-dom'
import Header from '../components/Header'
import EventSection from '../sections/EventSection'

const Alumni = () => {
    const AlumniBreaking = () =>{
        return(
            <section className='py-12 '>
                <div className="main gap-5 flex flex-col justify-center items-center">
                    <h1 className=' !font-heading capitalize text-4xl text-heading font-medium'>Save the date for SAEC Reunion Homecoming!</h1>
                    <p className='paragraph xl:w-1/2 text-center'>Calling all ’4s and ’9s! It’s time to reunite with your classmates on November 24–27, 2024.</p>
                    <img src="/blog.webp" className=' w-full h-[600px] object-cover' alt="" />
                </div>
            </section>
        )
    }

    const StoryBox = () =>{
        return(
            <div className=" space-y-5">
                <img src="/blog.webp" className=' object-cover h-[360px] w-full' alt="" />
                <h1 className='!font-heading capitalize text-2xl leading-snug text-heading font-medium pr-28'>Exploring Environmental Frontiers Unveiling Insights</h1>
                <p className='paragraph pr-20'>Through these narratives, readers gain insight into the diverse backgrounds, aspirations, and achievements of individuals.                </p>
            </div>
        )
    }
    const SuccessStories = () =>{
        return(
            <section className="py-28">
                <div className="main">
                    <div className="flex flex-col xl:flex-row gap-16">
                        <div className="xl:w-1/2 space-y-9">
                            <div className="head space-y-8">
                                <h1 className=' heading '>Stories of SAEC Student</h1>
                                <p className='paragraph pr-28'>Embark on a journey of knowledge, discovery, and growth at Unipix University. Our admissions process is designed identify bright, motivated individuals who are eager contribute to our dynamic academic community.</p>
                            </div>
                            <StoryBox/>
                        </div>
                        <div className="xl:w-1/2 space-y-9">
                            <StoryBox/>
                            <Link to={'/'} className=' bg-primary text-white px-7 py-4 capitalize felx items-center gap-6 w-full'>view all stories</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const Gallery = () =>{
        return(
            <section className="py-28">
                <div className="main space-y-10">
                    <h1 className='md:text-center !font-heading capitalize text-4xl text-heading font-medium'>Save the date for SAEC Reunion Homecoming!</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {Array.from({length:12}).map((_,index)=>(
                            <img src="/blog.webp" alt=""  key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
  return (
    <main>
        <Header/>
        <AlumniBreaking/>
        <SuccessStories/>
        <EventSection/>
        <Gallery/>
    </main>
  )
}

export default Alumni
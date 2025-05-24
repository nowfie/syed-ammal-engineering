import Header from '../components/Header'
import IntroHead from '../components/IntroHead'

const CampusLife = () => {
    const CampusIntro = () =>{
        return(
            <section className="py-28">
                <div className='main space-y-6'>
                    <img src="/blog.webp" className=' w-full h-[700px] object-cover' alt="" />
                    <p className=' paragraph text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, ut at minus cupiditate sapiente a eos nostrum. Nostrum aliquid quasi deleniti atque autem minus voluptas molestias? Natus assumenda facilis id.</p>
                </div>
            </section>
        )
    }

    const LifeDynamic = () =>{
        const LifeBox = () =>{
            return(
                <div className=" space-y-5 border border-gray-200">
                    <img src="/blog.webp" alt="" />
                    <div className=" p-5">
                        <h1 className='!font-heading capitalize text-2xl leading-snug text-heading font-medium'>Exploring Environmental Frontiers Unveiling Insights</h1>
                        <p className='paragraph'>Students, faculty, recreational facilities and wellness programs.</p>
                    </div>
                </div>
            )
        }
        return(
            <section className="py-28">
                <div className="main flex flex-col justify-center items-center gap-8">
                    <h1 className=' sub-heading'>student life</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {Array.from({length:9}).map((_,index)=>(
                            <LifeBox key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

  return (
    <main>
        <Header/>
        <CampusIntro/>
        <LifeDynamic/>
        <LifeDynamic/>
        <LifeDynamic/>
    </main>
  )
}

export default CampusLife
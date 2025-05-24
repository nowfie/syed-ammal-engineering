import Header from '../../components/Header'
import IntroHead from '../../components/IntroHead'
import EventSection from '../../sections/EventSection'

const ClubDetail = () => {
    const DetailSection = () =>{
        return(
          <section className="py-12">
            <div className="main space-y-10">
              <img src="/blog.webp" className="w-full h-[700px] object-cover" alt="" />
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

      const GallerySection = () =>{

        const LifeBox = () =>{
            return(
                <div className=" space-y-5 border border-gray-200">
                    <img src="/blog.webp" alt="" />
                </div>
            )
        }

        return(
            <section className="py-12">
                <div className="main">
                    <h1 className=" sub-heading mb-7">gallery</h1>
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
        <IntroHead/>
        <DetailSection/>
        <GallerySection/>
        <EventSection/>
    </main>
  )
}

export default ClubDetail
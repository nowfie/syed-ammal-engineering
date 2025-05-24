import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header"
import { GoArrowRight } from "react-icons/go"
import ResearchSection from "../../sections/ResearchSection"
import IntroHead from "../../components/IntroHead"
import Line from "../../components/Line"

const Faculty = () => {

    const{ programmeName,department } = useParams()

      const FacultySection = () =>{
      
          const FacultyBox = () =>{
            return(
              <div className="border border-paragraph/30">
                <img src="/dep1.webp" alt="" />
                <div className="flex flex-col  p-4">
                  <Link to={`/academic/${programmeName}/${department}/faculty/john`} className="capitalize font-medium text-lg mb-1 !font-heading">faculty name </Link>
                  <h3 className=" text-paragraph font-medium text-xs capitalize">assistant professor</h3>
                  {/* <Link to={`/academic/${programmeName}/${department}/faculty/john`} className="  p-2 border rounded-full">
                    <GoArrowRight />
                  </Link> */}
                </div>
              </div>
            )
          }
          return(
            <section className="py-12">
              <div className="main space-y-10">
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <div className="xl:w-1/2">
                      <h1 className="!font-heading text-heading capitalize text-5xl font-medium leading-snug">faculty</h1>
                  </div>
                  <div className="xl:w-1/2">
                      <input type="text" className="border p-3 border-gray-200 " placeholder="search here..." />
                  </div>
                </div>
                <Line className={''}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array.from({length:6}).map((_,index)=>(
                    <FacultyBox key={index}/>
                  ))}
                </div>
              </div>
            </section>
          )
        }

  return (
    <main>
        <Header/>
        <FacultySection/>
        <ResearchSection/>
    </main>
  )
}

export default Faculty
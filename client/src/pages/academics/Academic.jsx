import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header"
import BlogSection from "../../sections/BlogSection"
import { GoArrowRight } from "react-icons/go"
import IntroHead from "../../components/IntroHead"

const Academic = () => {
  const {programmeName} = useParams()

  const DetailSection = () =>{
    return(
      <section className="py-12">
        <div className="main space-y-10">
          <img src="/blog.webp" className="w-full h-[500px] object-cover" alt="" />
          <div className="about-content">
            <h1 className="sub-heading mb-5">about the program</h1>
            <div className=" space-y-6 paragraph">
              {Array.from({length:2}).map((_,index)=>(
                <p key={index} className="paragraph">The Department of English, under the Faculty of Arts & Social Sciences (FA), started its journey with two predominant visions: first, to enhance and nourish students’ mental, ethical, and creative facets of their personality; secondly, to prepare themselves for efficient professional and technical employment in future. There can be no denying that ethics, values, morality and creativity are the essential ingredients of nation-building.</p>  
              ))}
            </div>  
          </div>
        </div>
      </section>
    )
  }

  const DepartmentSection = () =>{

    const DepartmentBox = () =>{
      return(
        <div className="border border-paragraph/30">
          <img src="/dep1.webp" alt="" />
          <div className="flex justify-between items-center p-4">
            <h3 className="capitalize font-medium text-lg">computer science</h3>
            <Link to={`/academic/${programmeName}/csbs`} className="  p-2 border rounded-full">
              <GoArrowRight />
            </Link>
          </div>
        </div>
      )
    }
    return(
      <section className="py-12">
        <div className="main">
          <h1 className=" !font-heading text-heading capitalize text-4xl font-medium mb-10">list of department</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({length:6}).map((_,index)=>(
              <DepartmentBox key={index}/>
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
      <DepartmentSection/>
      <BlogSection/>
    </main>
  )
}

export default Academic
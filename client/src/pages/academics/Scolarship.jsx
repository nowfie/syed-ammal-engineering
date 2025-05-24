import { useParams } from "react-router-dom"
import DepartmentQuick from "../../components/DepartmentQuick"
import Header from "../../components/Header"
import IntroHead from "../../components/IntroHead"
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md"
import FaqSection from "../../sections/FaqSection"

const Scolarship = () => {
  const {programmeName, department} = useParams()

  const DetailSection = () =>{
    return(
      <section className="pt-12 pb-8">
        <div className=" space-y-10">
          <img src="/blog.webp" className="w-full" alt="" />
          <div className="about-content">
            <h1 className=" !font-heading text-heading capitalize text-4xl font-medium mb-5">Scholarship Opportunities at Unipix University</h1>
            <div className=" space-y-6">
              {Array.from({length:1}).map((_,index)=>(
                <p key={index} className=" paragraph">At Unipix University, we are committed to supporting academic excellence and ensuring that deserving students have access to quality education. Through a range of scholarship opportunities, we aim to recognize and reward outstanding achievements. Explore the various scholarships available</p>  
              ))}
            </div>  
          </div>
        </div>
      </section>
    )
  }


  const ScholarshipSection = () =>{
    return(
      <section className="py-12">
        <h1 className=" !font-heading text-heading text-3xl capitalize mb-7">Merit-Based Scholarships</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-foreground p-9">
            <h1 className=" !font-heading capitalize text-2xl font-medium mb-7 text-heading">Presidential Scholarship</h1>
            <ul className=" space-y-6">
              <li className=" capitalize">
                <strong className=" underline mr-4">amount : </strong>
                $6,142per academic year
              </li>
              <li className=" capitalize mr-7">
                <strong className=" underline mr-4">Eligibility:  </strong>
                Awarded to students with exceptional academic achievements.
              </li>
              <li className=" capitalize">
                <strong className=" underline mr-4">Application Process: </strong>
                Automatically considered during the admissions process.
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 bg-primary p-9 text-white">
            <h1 className=" !font-heading capitalize text-2xl font-medium mb-7 text-white">Presidential Scholarship</h1>
            <ul className=" space-y-6">
              <li className=" capitalize">
                <strong className=" underline mr-4">amount : </strong>
                $6,142per academic year
              </li>
              <li className=" capitalize mr-7">
                <strong className=" underline mr-4">Eligibility:  </strong>
                Awarded to students with exceptional academic achievements.
              </li>
              <li className=" capitalize">
                <strong className=" underline mr-4">Application Process: </strong>
                Automatically considered during the admissions process.
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  const RequirementSection = ()=>{
    return(
      <section className="py-12">
        <h1 className=" sub-heading mb-7">Scholarship Requirements at syed ammal</h1>
        <p className="paragraph">For detailed information on eligibility criteria, application deadlines, and the application process for each scholarship, please visit our [Scholarships] page or contact the Unipix University Financial Aid Office.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 text-lg text-heading gap-4">
          <div className="">
            <ul className=" space-y-4">
              {Array.from({length:4}).map((_,index)=>(
                <li key={index} className="flex items-center gap-3"> <MdOutlineSubdirectoryArrowRight className=" text-xl text-primary"/>  Outstanding academic achievements.</li>
              ))}
            </ul>
          </div>
          <div className="">
            <ul className=" space-y-4">
              {Array.from({length:4}).map((_,index)=>(
                <li key={index} className="flex items-center gap-3"> <MdOutlineSubdirectoryArrowRight className=" text-xl text-primary"/>  Outstanding academic achievements.</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main>
        <Header/>
        <div className="main flex flex-col justify-between xl:flex-row gap-10">
            <div className="xl:w-[70%]">
                <DetailSection/>
                <ScholarshipSection/>
                <ScholarshipSection/>
                <RequirementSection/>
                <FaqSection/>
            </div>
            <div className="xl:w-[30%]">
                <DepartmentQuick programmeName={programmeName} department={department}/>
            </div>
        </div>
    </main>
  )
}

export default Scolarship
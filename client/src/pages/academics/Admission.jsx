import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import Header from "../../components/Header"
import IntroHead from "../../components/IntroHead";
import DepartmentQuick from "../../components/DepartmentQuick";
import { useParams } from "react-router-dom";
import FaqSection from "../../sections/FaqSection";

const Admission = () => {
    
  const {programmeName,department} = useParams()
      const DetailSection = () =>{
        return(
          <section className="pt-12 pb-8">
            <div className="main space-y-7">
              <img src="/blog.webp" className="w-full h-[500px] object-cover" alt="" />
              <div className="about-content">
                    <h1 className='mb-5 sub-heading'>about tution & fees</h1>
                   
                <div className=" space-y-3">
                  {Array.from({length:2}).map((_,index)=>(
                    <p key={index} className=" paragraph">The Department of English, under the Faculty of Arts & Social Sciences (FA), started its journey with two predominant visions: first, to enhance and nourish students’ mental, ethical, and creative facets of their personality; secondly, to prepare themselves for efficient professional and technical employment in future. There can be no denying that ethics, values, morality and creativity are the essential ingredients of nation-building.</p>  
                  ))}
                </div>  
              </div>
            </div>
          </section>
        )
      }

      const RequirementSection = () =>{
        return(
          <section className="py-12">
            <div className="main space-y-7">
              <div className="about-content">
                <h1 className=" !font-heading text-heading capitalize text-4xl font-medium mb-4">Requirements and Deadlines</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 text-lg text-heading">
                    <div className="">
                      <ul className=" space-y-4 text-paragraph">
                        {Array.from({length:4}).map((_,index)=>(
                          <li key={index} className="flex items-center gap-3"> <MdOutlineSubdirectoryArrowRight className=" text-xl text-primary"/>  Outstanding academic achievements.</li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <ul className=" space-y-4 text-paragraph">
                        {Array.from({length:4}).map((_,index)=>(
                          <li key={index} className="flex items-center gap-3"> <MdOutlineSubdirectoryArrowRight className=" text-xl text-primary"/>  Outstanding academic achievements.</li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </section>
        )
      }

      const FeeSection = () =>{
        const TableSection = () =>{
          return(
            <table className=" w-full text-left">
              <thead>
                <tr className=" bg-primary text-white capitalize">
                  <th className=" p-4">admission</th>
                  <th className=" p-4">tution fee</th>
                  <th className=" p-4">bus fee</th>
                  <th className=" p-4">hostel fee</th>
                </tr>
              </thead>
              <tbody className=" capitalize border  paragraph">
                <tr className=" border-gray-200 border">
                  <td className=" p-4 text-heading font-medium">
                    management
                  </td>
                  <td className=" p-4">
                    20000
                  </td>
                  <td className=" p-4">
                    20000
                  </td>
                  <td className=" p-4">
                    20000
                  </td>
                </tr>
                <tr className=" border-gray-200 border">
                  <td className=" p-4  text-heading font-medium">
                    counseling
                  </td>
                  <td className=" p-4">
                    20000
                  </td>
                  <td className=" p-4">
                    20000
                  </td>
                  <td className=" p-4">
                    20000
                  </td>
                </tr>
              </tbody>
            </table>
          )
        }
        return(
          <section className="py-12">
            <div className="main">
              <h1 className=" !font-heading text-heading capitalize text-4xl font-medium mb-7">fees structure</h1>
                <TableSection/>
                <p className=" mt-6 paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ut maiores nisi libero obcaecati recusandae dolorum unde officia corporis voluptatum magnam vero aspernatur eligendi sequi corrupti nesciunt aliquam similique nostrum pariatur provident voluptates, cupiditate maxime excepturi enim? Suscipit exercitationem quia dolorem placeat hic? Expedita ipsa reprehenderit dolores possimus repellendus, sit repellat aut soluta blanditiis, reiciendis tenetur iusto, facere dolor aspernatur autem quibusdam maiores quo nisi quam alias. Odio doloremque deserunt dolore a iure exercitationem recusandae illum tempora vero? Nemo exercitationem, corrupti qui animi minus, aliquam incidunt natus velit iure debitis fugiat obcaecati. Quam quasi blanditiis maxime, eius veritatis ex quos!</p>
            </div>
          </section>
        )
      }

  return (
    <main>
        <Header/>
        <DetailSection/>
        <RequirementSection/>
        <FeeSection/>
        <div className="flex main flex-col xl:flex-row gap-10">
          <div className="xl:w-[70%]">
            <div className=" h-[700px] w-full bg-foreground">

            </div>
            <FaqSection/>
          </div>
          <div className="xl:w-[30%]">
            
            <DepartmentQuick programmeName={programmeName} department={department}/>
          </div>
        </div>
    </main>
  )
}

export default Admission
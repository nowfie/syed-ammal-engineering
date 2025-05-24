import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa6"
import PropTypes from "prop-types"

const DepartmentQuick = ({programmeName,department}) => {

    const QuickLinkSection = () =>{
            const LinkList = [
                {
                    name:'course curriculam',
                    path:`/academic/${programmeName}/${department}/curriculam`
                },
                {
                    name:'program faculty',
                    path:`/academic/${programmeName}/${department}/faculty`
                },
                {
                    name:'apply admission',
                    path:`/academic/${programmeName}/${department}/admission`
                },
                {
                    name:'scholarship',
                    path:`/academic/${programmeName}/${department}/scholarship`
                },
                {
                    name:'join events',
                    path:'/'
                },
            ]
            return(
                <section className={`py-12`}>
                    <div className="">
                        <h1 className="bg-heading text-white px-4 py-3 text-center !font-heading capitalize font-medium text-xl">computer science & business systems</h1>
                        <ul className=" text-heading border-x border-paragraph/30">
                            {LinkList.map((item,index)=>(
                                <li key={index} className="hover:text-primary duration-300">
                                    <Link className=" capitalize py-3 px-5 flex border-b border-paragraph/30 items-center gap-3" to={item.path}><GoArrowRight/> {item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )
          }
    
          const ContactInfo = () =>{
            return(
                <section>
                    <div className="bg-primary space-y-12 p-10 text-white">
                        <div className="">
                            <h1 className=" mb-2 !font-heading capitalize font-medium text-2xl">Department Contact Info</h1>
                            <h2 className="!font-heading capitalize font-medium text-lg">B.Tech CS & BS</h2>
                        </div>
                        <div className="">
                            <h1 className=" mb-3 !font-heading capitalize font-medium text-xl">contact:</h1>
                            <h2>barry.Unipix@info.com664-254-251</h2>
                        </div>
                        <div className="">
                            <h1 className=" mb-3 !font-heading capitalize font-medium text-xl">social info:</h1>
                            <div className="flex gap-5">
                                {Array.from({length:4}).map((_,index)=>(
                                    <Link to={'/'} key={index} className=" text-white text-xl"><FaInstagram/></Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )
          }
  return (
    <div>
        <QuickLinkSection/>
        <ContactInfo/>
    </div>
  )
}

DepartmentQuick.propTypes = {
    programmeName:PropTypes.string,
    department:PropTypes.string
}

export default DepartmentQuick
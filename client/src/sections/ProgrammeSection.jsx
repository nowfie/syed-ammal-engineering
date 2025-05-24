import PropTypes from "prop-types"
import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"

const ProgrammeSection = () => {

    const programmeList = [
        {
            name:'under graduate',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ex.',
            path:'/academic/under-graduate'
        },
        {
            name:'post graduate',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ex.',
            path:'/academic/post-graduate'
        },
        {
            name:'doctorate',
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, ex.',
            path:'/academic/doctorate'
        },
    ]

    const ProgrammeBox = ({index,item}) =>{
        return(
            <div className={`p-12 ${index ==1?' bg-primary md:scale-110 ':' bg-foreground'} space-y-7`}>
                <h1 className={` !font-heading  capitalize font-medium text-4xl  ${index==1?' text-white':' text-heading'}`}>{item.name}</h1>
                <p className={`  ${index==1?' text-white':' text-paragraph'} text-sm leading-relaxed capitalize`}>{item.description}</p>
                <Link to={item.path} className={` ${index != 1?' border-gray-300 text-paragraph':' border-white text-white'}  border p-4 w-fit text-sm font-medium capitalize flex gap-2 items-center`}>read more <GoArrowUpRight/> </Link>
            </div>
        )
    }

    ProgrammeBox.propTypes = {
        index:PropTypes.number,
        item: PropTypes.object
    }
  return (
    <section className="py-28 ">
        <div className="main">
            <div className="header mb-20 flex flex-col lg:flex-row gap-14">
                <div className="lg:w-1/2 space-y-7">
                    <h1 className="heading ">our academics & programs</h1>
                </div>
                <div className="lg:w-1/2 space-y-7">
                    <p className='text-paragraph leading-relaxed'>Dive Into The Vast Array Of Courses Offered At Our University, Spanning Across 10+ Specializations. Embrace An Educational Journey That Ignites Intellectual Curiosity And Nurtures Intuitive Learning Among Our Students.</p>
                </div>
            </div>
            <div className="content flex flex-col md:flex-row">
                {programmeList.map((item,index)=>(
                    <ProgrammeBox key={index} item={item} index={index}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProgrammeSection
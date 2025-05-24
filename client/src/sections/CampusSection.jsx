import PropTypes from "prop-types"
import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"

const CampusSection = () => {

    const campusData = [
        {
            name:'student life',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorem.',
            to:'/campus-life'
        },
        {
            name:'hostel life',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorem.',
            to:'/campus-life'
        },
        {
            name:'arts & culture',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorem.',
            to:'/campus-life'
        },
    ]

    const CampusBox = ({item}) =>{
        return(
            <div className="border border-gray-300 group p-9 relative flex items-center justify-between overflow-hidden">
                <img src="/blog.webp" className=" opacity-0 -translate-x-50 group-hover:translate-x-0 brightness-50 left-0 group-hover:opacity-100 duration-700 transition-all absolute top-0 object-cover w-full h-full" alt="" />
                <div className=" space-y-4 w-[60%] z-40">
                    <h1 className="!font-heading capitalize group-hover:text-white duration-300 transition-all font-medium text-4xl text-heading">{item.name}</h1>
                    <p className=" text-paragraph leading-relaxed group-hover:text-white duration-300 transition-all">{item.description}</p>
                </div>
                <Link to={item.to} className=" p-4 z-40 border group-hover:text-white duration-300 transition-all border-gray-400 rounded-full text-xl"><GoArrowUpRight/></Link>
            </div>
        )
    }

    CampusBox.propTypes = {
        item:PropTypes.object
    }

  return (
    <section className=' py-28'>
        <div className="main flex flex-col lg:flex-row gap-14">
            <div className="lg:w-[40%] space-y-20">
                <div className="content space-y-8">
                    <h1 className=' heading'>campus life</h1>
                    <p className=' text-paragraph'>Embark on a journey of knowledge, discovery, and growth at Unipix University. Our admissions process is designed identify bright, motivated individuals who are eager contribute to our dynamic academic community.</p>
                </div>
                <img src="/right-arrow.webp" className=" m-auto" alt="" />
            </div>
            <div className="lg:w-[60%] space-y-6">
                {campusData.map((item,index)=>(
                    <CampusBox item={item} key={index}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default CampusSection
import { useParams } from 'react-router-dom'
import DepartmentQuick from '../../components/DepartmentQuick'
import Header from '../../components/Header'
import { BsPlus } from 'react-icons/bs'
import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

const Curriculam = () => {
    const {programmeName, department} = useParams()
    const DetailSection = () =>{
        return(
            <section className="py-12">
                <div className="main">
                    <div className="space-y-10">
                        <div className="">
                            <h1 className='mb-5 sub-heading'>about tution & fees</h1>
                            <p className='paragraph'>Tuition rates for the Fall and Spring semesters are approved at the Board of Trustees meeting in July prior to the beginning of the academic year. Summer tuition rates are approved at the Board of Trustees meeting in February before the term begins. Course registration dates can be found on the . See Important Dates for payment due dates and other deadlines.</p>
                        </div>
                        <div className="">
                            <h1 className='mb-5 sub-heading !text-2xl'>curriculam & syllabus</h1>
                            <p className='paragraph'>Tuition rates for the Fall and Spring semesters are approved at the Board of Trustees meeting in July prior to the beginning of the academic year. Summer tuition rates are approved at the Board of Trustees meeting in February before the term begins. Course registration dates can be found on the . See Important Dates for payment due dates and other deadlines.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const [open,setOpen] = useState(false)

    const curriculumData = [
        {
          year: 'Year One',
          syllabus: 'Introduction to basic courses in the programme including foundational subjects and labs.',
          subjects: [
            'Mathematics I',
            'Physics I',
            'Introduction to Programming',
            'English Communication',
          ]
        },
        {
          year: 'Year Two',
          syllabus: 'Core subjects focusing on the intermediate-level understanding of the field.',
          subjects: [
            'Data Structures',
            'Digital Electronics',
            'Discrete Mathematics',
            'Object Oriented Programming',
          ]
        },
        {
          year: 'Year Three',
          syllabus: 'Advanced subjects and electives along with project work.',
          subjects: [
            'Operating Systems',
            'Database Management Systems',
            'Computer Networks',
            'Mini Project',
          ]
        },
        {
          year: 'Year Four',
          syllabus: 'Final year with research-based learning, industrial training and capstone project.',
          subjects: [
            'Machine Learning',
            'Cloud Computing',
            'Elective - I',
            'Capstone Project',
          ]
        }
      ]

      const TableSection = () =>{
        return(
            <table className=' c-table w-full'>
                <thead className=' bg-primary text-white capitalize'>
                    <tr>
                        <th className=' w-[70%] text-left p-5 c-th'>semester 1 subjects</th>
                        <th className='w-[30%] text-left p-5'>credits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=' p-5 c-td'>
                            Introduction to Africana Studies or GSS 2201 - Africana Studies
                        </td>
                        <td className=' p-5'>
                            3 credits
                        </td>
                    </tr>
                </tbody>
            </table>
        )
      }
      

      const CurriculamBox = ({ year, syllabus, subjects }) => {
        const [open, setOpen] = useState(false)
        const contentRef = useRef(null)
      
        return (
          <div className={`relative space-y-3 transition-all duration-300 rounded`}>
            <button
              onClick={() => setOpen(!open)}
              className={`capitalize p-5 w-full flex justify-between items-center ${open?'bg-primary text-white':' border border-primary'}`}
            >
              <span className="!font-heading text-xl">{year}</span>
              <BsPlus className={`text-3xl transition-transform ${open ? 'rotate-45' : 'rotate-0'} border rounded-full`} />
            </button>
            <div ref={contentRef} style={{ maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0px', }} className="transition-all duration-500 overflow-hidden space-y-8">
              <TableSection/>
              <TableSection/>
            </div>
          </div>
        )
      }

      CurriculamBox.propTypes = {
        year:PropTypes.number,
        syllabus:PropTypes.string,
        subjects:PropTypes.array
      }
      
      
  return (
    <main>
        <Header/>
        <DetailSection/>
        <div className="main  flex flex-col justify-between xl:flex-row gap-10">
            <div className="xl:w-[70%]">
                <h1 className=' sub-heading !text-2xl mb-3'>program courses: 40 credits</h1>
                <p className=' capitalize paragraph mb-7'>Core Required Courses for all majors:</p>
                <div className=" space-y-3">
                    {curriculumData.map((item, index) => (
                        <CurriculamBox
                            key={index}
                            year={item.year}
                            syllabus={item.syllabus}
                            subjects={item.subjects}
                        />
                    ))}
                </div>
            </div>
            <div className="xl:w-[30%]">
                <DepartmentQuick programmeName={programmeName} department={department}/>
            </div>
        </div>
    </main>
  )
}

export default Curriculam
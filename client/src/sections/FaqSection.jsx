import PropTypes from "prop-types"
import { useRef, useState } from "react"
import { BsPlus } from "react-icons/bs"

const FaqSection = () => {

    const FaqBox = () => {
            const [open, setOpen] = useState(false)
            const contentRef = useRef(null)
          
            return (
              <div className={`relative space-y-3 transition-all duration-300 rounded`}>
                <button
                  onClick={() => setOpen(!open)}
                  className={`capitalize p-5 w-full flex justify-between items-center ${open?'bg-primary text-white':' border border-primary'}`}
                >
                  <span className="!font-heading text-xl">What are the admission requirements for Unipix University?</span>
                  <BsPlus className={`text-3xl transition-transform ${open ? 'rotate-45' : 'rotate-0'} border rounded-full`} />
                </button>
                <div ref={contentRef} style={{ maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0px', }} className="transition-all px-3 duration-500 overflow-hidden">
                  <p className="paragraph">Admission requirements vary by program. Please refer to the Admissions section on our website for detailed information or contact the Admissions Office for assistance.</p>
                </div>
              </div>
            )
          }
    
          FaqBox.propTypes = {
            year:PropTypes.number,
            syllabus:PropTypes.string,
            subjects:PropTypes.array
          }

  return (
    <section className=" py-12">
        <div className="">
        <h1 className=" sub-heading mb-7">Frequently Asked Questions (FAQ)</h1>
        <div className=" space-y-3">
            {Array.from({length:5}).map((_,index)=>(
                <FaqBox key={index}/>
            ))}
        </div>
        </div>
    </section>
  )
}

export default FaqSection
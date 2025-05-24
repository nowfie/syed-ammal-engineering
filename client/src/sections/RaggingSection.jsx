import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"

const RaggingSection = () => {
  return (
    <section className="pt-28">
        <div className="main flex flex-col lg:flex-row gap-14">
           <div className="lg:w-1/2 flex justify-center items-center">
            
           </div>
           <div className="lg:w-1/2 space-y-12">
                <h1 className=" heading ">Anti-Ragging Committee</h1>
                <p className=" text-paragraph leading-relaxed">In view of the directions of the Hon’ble Supreme Court in SLP No. 24295 of 2006 dated 16-05-2007 and in Civil Appeal number 887 of 2009, dated 08-05-2009 to prohibit, prevent and eliminate the scourge of ragging including any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student, or indulging in rowdy or undisciplined activities by any student or students which causes or is likely to cause annoyance, hardship or psychological harm or to raise fear or apprehension thereof in any fresher or any.</p>
                <Link to='/' className=' text-primary font-semibold capitalize flex gap-2 items-center underline underline-offset-4'>anti-ragging squad <GoArrowUpRight/> </Link>
           </div>
        </div>
    </section>
  )
}

export default RaggingSection
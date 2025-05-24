import { BsMailbox } from "react-icons/bs"
import {  GoDotFill } from "react-icons/go"

const FacultyDetail = () => {
    const HeaderSection = () =>{
        return(
            <section>
                <div className="main py-28">
                    <h1 className=" !font-heading font-medium text-6xl capitalize text-heading">john samuel</h1>
                </div>
            </section>
        )
    }

    const DetailSection = () =>{
        return(
            <section>
                <div className="space-y-4">
                    <h3 className=" text-paragraph capitalize">Professor of Art</h3>
                    <h1 className=" text-heading !font-heading font-medium text-4xl">Jennifer Aarons</h1>
                    <p className=" text-paragraph leading-relaxed capitalize">Katherine Panagakos earned her M.A. in Classics from Tulane University and her Ph.D. in Greek and Latin from The Ohio State University. During her graduate work, she was a student at The American School of Classical Studies at Athens (ASCSA) and was a field walker and camp manager at the Eastern Korinthia Archaeogical Survey (EKAS). Katherine spent three years in a rotating position at schools in the Associated Colleges of the South (Southwestern University in Georgetown, TX; Furman University in Greenville, SC; and Rhodes College in Memphis, TN).</p>
                </div>
            </section>
        )
    }

    const SocialSection = () =>{
        const SocialBox = () =>{
            return(
                <div className="flex gap-5">
                    <div className="p-4 border border-paragraph/30 text-paragraph/80">
                        <BsMailbox/>
                    </div>
                    <div className="space-y-2">
                        <h3 className=" text-heading capitalize font-bold">email address</h3>
                        <h4 className=" text-paragraph">info@gmail.com</h4>
                    </div>
                </div>
            )
        }
        return(
            <section>
                <div className="space-y-5">
                    {Array.from({length:3}).map((_,index)=>(
                        <SocialBox key={index}/>
                    ))}
                </div>
            </section>
        )
    }

    const ExpertiseSection = () =>{
        return(
            <section>
                <div className="space-y-4">
                    <h1 className=" text-heading !font-heading font-medium capitalize text-3xl">Areas of expertise</h1>
                    <p className=" text-paragraph capitalize">AREAS OF EXPERTISE Latin language and literature, Ancient Greek and Roman novels, Augustan Age, Classical mythology, Greco-Romans in film, zombies in popular culture</p>
                    <ul className=" capitalize text-paragraph space-y-2">
                        {Array.from({length:4}).map((_,index)=>(
                            <li key={index} className=" flex gap-3 items-center"> <GoDotFill  className=" text-primary"/> machine learning</li>
                        ))}
                    </ul>
                </div>
            </section>
        )
    }

  return (
    <main>
        <HeaderSection/>
        <div className="flex main flex-col xl:flex-row gap-8">
            <div className="xl:w-[35%] space-y-8">
                <div className="">
                    <img src="/prof1.webp" alt="" />
                </div>
            </div>
            <div className="xl:w-[65%] space-y-8">
                <DetailSection/>
                <SocialSection/>
                <ExpertiseSection/>
            </div>
        </div>
    </main>
  )
}

export default FacultyDetail
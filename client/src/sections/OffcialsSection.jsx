import { Link } from 'react-router-dom'

const OffcialsSection = () => {
  return (
    <section className="py-28  bg-primary">
        <div className="main flex flex-col lg:flex-row gap-12 justify-between items-center">
            <div className="lg:w-[40%] space-y-8">
                <h1 className=' heading  !text-white'>officials of saec</h1>
                <p className=' text-white'>Embark on a journey of knowledge, discovery, and growth at Unipix University. Our admissions process is designed identify bright, motivated individuals who are eager contribute to our dynamic academic community.</p>
                <Link to={'/'} className=' uppercase border text-white px-5 py-3 !font-heading'>all faculties</Link>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:flex-row gap-8">
                <div className=" relative flex justify-center items-center overflow-hidden">
                    <img src="/princ.jpg" className='' alt="" />
                    <div className=" w-[80%] bottom-5  bg-white absolute px-8 py-4">
                        <h2 className=' capitalize text-center font-semibold !font-heading text-primary'>Dr. Pricipal </h2>
                        <h5 className=' uppercase text-center text-xs !font-heading'>principal</h5>
                    </div>
                </div>
                <div className=" relative flex justify-center items-center overflow-hidden">
                    <img src="/princ.jpg" className='' alt="" />
                    <div className=" w-[80%] bottom-5  bg-white absolute px-8 py-4">
                        <h2 className=' capitalize text-center font-semibold !font-heading text-primary'>Dr. Pricipal </h2>
                        <h5 className=' uppercase text-center text-xs !font-heading'>principal</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OffcialsSection
import PropTypes from 'prop-types'

const RecordSection = () => {

    const recordData = [
        {
            name:'Undergraduate & Graduate Students',
            number:2000
        },
        {
            name:'Unipix University Faculty & Staff',
            number:17649
        },
        {
            name:'Unipix University Alumni Worldwide',
            number:'300k'
        },
        {
            name:'Undergraduate & Graduate Students',
            number:25000
        },
    ]

    const RecordBox = ({index,item}) =>{
        return(
            <div className={` space-y-4 xl:p-5 border-gray-200  ${index !=0?' lg:border-l lg:pl-14':' lg:pr-10'} `}>
                <h1 className='!font-heading text-primary font-semibold text-5xl'>{item.number}</h1>
                <h3 className=' capitalize text-heading leading-relaxed'>{item.name}</h3>
            </div>
        )
    }

    RecordBox.propTypes = {
        index:PropTypes.number,
        item: PropTypes.object
    }

  return (
    <section className=' pb-28'>
        <div className="main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {recordData.map((item,index)=>(
                    <RecordBox index={index} item={item} key={index}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default RecordSection
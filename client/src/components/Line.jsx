import PropTypes from "prop-types"

const Line = ({className}) => {
  return (
    <div className={` ${className} p-[0.3px] bg-gray-200 w-full`}/>
  )
}

Line.propTypes = {
    className:PropTypes.string
}

export default Line
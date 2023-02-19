import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="md:p-3 bg-header w-full p-2 flex flex-row  justify-between items-center shadow-sm font-playfair">
            <a href="/" className="md:text-2xl text-xl cursor-pointer ">Get Organised.</a>
            <Link to='/' className="md:text-sm md:p-2 mx-2 p-1 px-2 rounded-md bg-button hover:bg-amber-100">Home</Link>
        </div>
  )
}

export default Header

import { Link } from "react-router";

interface Props {};

const Navbar = (props : Props) => {
    return(
        <div className="nav-container flex justify-start items-center flex-col gap-4 bg-gray-200 p-[3vw] h-[100vh]">
            <Link className="text-black" to="/">Home</Link>
            <Link className="text-black" to="/search">Search</Link>
            <Link className="text-black" to="/list">List</Link>
            <Link className="text-black" to="/schedulebuilder">Schedule Builder</Link>
        </div>
    )
}

export default Navbar;
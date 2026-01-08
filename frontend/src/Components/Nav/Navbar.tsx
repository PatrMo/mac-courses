import { useState } from "react";
import { Link } from "react-router";

interface Props {};

const Navbar = (props : Props) => {
    const [expanded, setExpanded] = useState(true);
    return(
        <div className="flex flex-row justify-start items-start h-full">
            <div className="nav-container flex justify-start items-start flex-col gap-[4vh] bg-gray-200 h-[100vh]">
                <Link className={`overflow-hidden transition-all ${expanded ? "w-40": "w-0"}`} to="/">Home</Link>
                <Link className={`overflow-hidden transition-all ${expanded ? "w-40": "w-0"}`} to="/search">Search</Link>
                <Link className={`overflow-hidden transition-all ${expanded ? "w-40": "w-0"}`} to="/list">List</Link>
                <Link className={`overflow-hidden transition-all ${expanded ? "w-40": "w-0"}`} to="/schedulebuilder">Schedule Builder</Link>
                
            </div>
            <button onClick={()=>setExpanded(curr=>!curr)}>{expanded ? "<" : ">"}</button>
        </div>
    )
}

export function NavBarItems({}){
    return(
        <div/>
    )
}

export default Navbar;
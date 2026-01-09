import { useState } from "react";
import { Link } from "react-router";

interface Props {};

const Navbar = (props : Props) => {
    const [expanded, setExpanded] = useState(true);
    return(
        <div className="fixed top-[7vh] left-0 right-0 flex flex-row justify-start items-start h-full">
            <div className="pt-[3vh] nav-container flex justify-start items-start flex-col gap-[4vh] bg-white/50 h-[100vh] shadow-lg/15">
                <Link className={`overflow-hidden transition-all ${expanded ? "ml-5 w-40": "w-0"}`} to="/">Home</Link>
                <Link className={`overflow-hidden transition-all ${expanded ? "ml-5 w-40": "w-0"}`} to="/search">Search</Link>
                <Link className={`overflow-hidden transition-all ${expanded ? "ml-5 w-40": "w-0"}`} to="/list">List</Link>
                <Link className={`overflow-hidden transition-all ${expanded ? "ml-5 w-40": "w-0"}`} to="/schedulebuilder">Schedule Builder</Link>

            </div>
            <button className="ml-[2vh] mt-[2vh] h-[5vh] w-[5vh] p-[1.5vh] shadow-lg/15 rounded-[50%]" onClick={()=>setExpanded(curr=>!curr)}>{
            expanded ? 
            <img className="" src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="Expand"></img> :
            <img className="rotate-180" src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="Collapse"></img>
            }</button>
        </div>
    )
}

export function NavBarItems({}){
    return(
        <div/>
    )
}

export default Navbar;
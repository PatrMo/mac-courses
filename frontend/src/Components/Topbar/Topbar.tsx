import { Link } from "react-router";

interface Props {};

const Navbar = (props : Props) => {
    return(
        <div className="w-[100vw] h-[5vh] bg-gray-200 flex flex-row items-center justify-center p-4 gap-4">
            <img className="w-[5vh] h-[5vh]" src="/src/assets/logo.png" alt="Logo"></img>
            <h1>Mac Courses</h1>
            <button className="light-dark-button ml-auto">
                <img className="w-[3vh] h-[3vh]" src="/src/assets/light-dark-icon.png" alt="Light/Dark Mode Toggle"></img>
            </button>
        </div>
    )
}

export default Navbar;
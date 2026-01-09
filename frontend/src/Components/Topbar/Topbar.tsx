import logo from '../../assets/logo.png';
interface Props {};

const Topbar = (props : Props) => {
    return(
        <div className="w-full h-[7vh] bg-gray-200 flex items-center justify-between p-4 bg-transparent shadow-lg/10">
            <img className="w-[10vh] h-[10vh]" src={logo} alt="Logo"></img>
            <h1 className="text-base">Mac Courses</h1>
            <button className="light-dark-button">
                <img className="w-[3vh] h-[3vh]" src="/src/assets/light-dark-icon.png" alt="Light/Dark Mode Toggle"></img>
            </button>
        </div>
    )
}

export default Topbar;
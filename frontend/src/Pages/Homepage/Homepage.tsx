import React from 'react';

interface Props {};

const Homepage = (props: Props) => {
    return(
    <div className="bg-linear-to-b from-white to-[#7A003C] w-full h-[300vh] flex flex-col justify-start items-center gap-10">
        <div className="hero_front_page flex flex-row justify-between items-center w-[70vw]">
            <div>
                <h3 className="bg-[#7A003C] text-white p-2 rounded-lg w-[165px]">McMaster University</h3>
                <h1 className="text-shadow-md text-[2.5rem] font-bold">Plan Your <span className="text-bold text-[#7A003C] rounded-lg">Academic Journey</span></h1>
                <p className="w-[95%] text-[#495965]">Make your course planning easier with our tools and resources designed with the students in mind.</p>
            </div>
            <img className="w-[30vw] object-cover rounded-lg" src="https://educationontario.com/app/uploads/2022/04/Photos3.jpg" />
        </div>
        <div>

        </div>

    </div>)
}//image is a placeholder, will replace with something better later
export default Homepage;
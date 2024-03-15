import mainbg from "../../assets/mainbg.png";
const Heroarea = () => {
    return (
        <div className="container mx-auto">
            <div className="md:p-[130px] p-4 mx-3 md:mx-0 bg-no-repeat bg-cover rounded-3xl md:mb-24 mb-7" style={{ backgroundImage: `url(${mainbg})` }}>
                <h1 className="md:text-[52px] text-3xl font-bold lexend text-center text-white mb-6">
                    Discover an exceptional cooking <br /> class tailored for you!
                </h1>
                <p className="text-[18px] lexend text-center text-white mb-10">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.
                </p>
                <div className="flex items-center justify-center">
                    <button className="btn px-[30px] py-[20px] mr-6 text-black bg-[#0BE58A] border border-[#0BE58A] rounded-full h-auto">Explore Now</button>
                    <button className="btn px-[30px] py-[20px] text-white bg-transparent border border-white rounded-full h-auto">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Heroarea;

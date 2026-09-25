import Navbar from "../components/Navbar";

const page = () => {
    return (
        <div className="w-full px-[4%] py-[6%] flex flex-col h-screen bg-background linearBg">
            <Navbar />

            <div className="w-full">
                <h2 className="text-[clamp(2.5rem,4vw,6rem)] text-gray py-[2%]">
                    Our team
                </h2>
            </div>

            <div className="grid grid-cols-6 gap-4 h-64">
                <div className="w-full h-full border-[0.1rem] border-darkGray bg-background p-[5%] flex flex-col justify-evenly">
                    <div className="w-full h-[60%] bg-lightGray"></div>
                    <div className="w-full h-[40%] bg-background"></div>
                </div>
                <div className="w-full h-full border-[0.1rem] border-darkGray bg-background p-[5%] flex flex-col justify-evenly">
                    <div className="w-full h-[60%] bg-lightGray"></div>
                    <div className="w-full h-[40%] bg-background"></div>
                </div>
                <div className="w-full h-full border-[0.1rem] border-darkGray bg-background p-[5%] flex flex-col justify-evenly">
                    <div className="w-full h-[60%] bg-lightGray"></div>
                    <div className="w-full h-[40%] bg-background"></div>                  
                </div>
            </div>
        </div>
    );
}

export default page;
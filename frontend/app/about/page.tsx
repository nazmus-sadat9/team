import Navbar from "../components/Navbar";

const page = () => {
    return (
        <div className="w-full font-mainfont">
            <Navbar />
            <div className="w-full h-screen bg-background p-[6%]">
                <h2 className="text-[clamp(2rem,4vw,5rem)] text-gray">About Us</h2>
            </div>

            <div>
                <span>Who We Are?</span>

                <p>
                    We are a full-service digital agency based in Bangladesh, partnering with brands worldwide to bring digital ideas to life. <br />
                    From initial design and technical development to seamless deployment, we craft high-performing websites and digital products <br /> 
                    tailored to your goals.
                </p>
            </div>


        </div>
    );
}

export default page;

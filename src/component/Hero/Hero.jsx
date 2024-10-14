import React from 'react';
import hero from '../../assets/hero.mp4';
import Typewriter from './Typewriter';

const Hero = () => {
    return (
        <div>
            <section className="relative h-screen flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video
                        className="min-w-full min-h-full absolute object-cover"
                        src={hero}
                        type="video/mp4"
                        autoPlay
                        muted
                        loop
                    ></video>
                    
                    {/* Adding a black overlay with opacity */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
                </div>

                {/* Content section with flexbox to split into left and right */}
                <div className="z-20 w-full flex justify-center items-center px-8">
                    <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row justify-around gap-8 items-center">
                        {/* Left side: Image */}
                        <div className="w-full md:w-1/2 bg-gray-400/50 p-6 rounded-lg flex flex-col justify-center items-start">
                            <h1 className="text-center font-semibold text-4xl">
                                Be a Part of Revolution with
                                <h3 className="font-semibold text-xl">Power your future with clean, renewable energy. Join the solar revolution today and take a step towards a greener, more sustainable tomorrow. Save money, protect the environment, and brighten your world with solar energy solutions tailored just for you.</h3>
                            </h1>
                            {/* Button below 'xyz' */}
                            <button className="mt-4 px-6 py-2 bg-orange-500 text-white border border-orange-500 rounded-lg hover:bg-orange-600">
                                Get Started
                            </button>
                        </div>

                        {/* Right side: Typewriter */}
                        <div className="w-full md:w-1/2 p-6 rounded-lg">
                            <h1 className="text-center font-semibold text-3xl">
                                Thinking Solar?<br />
                                <Typewriter />
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;

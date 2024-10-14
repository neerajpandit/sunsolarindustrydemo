import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import h1 from '../../assets/h1.png';
import h2 from '../../assets/h2.png';
import h3 from '../../assets/h3.png';
import h5 from '../../assets/h5.png';
import h6 from '../../assets/h6.png';
import b1 from '../../assets/b1.png';
import b2 from '../../assets/b2.png';
import b3 from '../../assets/b3.png';
import b4 from '../../assets/b4.png';

const Heroproduct = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                    <span className="inline-block">Our
                        <span className="relative whitespace-nowrap text-orange-600">
                            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70" preserveAspectRatio="none">
                                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                            </svg>
                            <span className="relative"> Products
                            </span>
                        </span>
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row justify-between mt-10">
                    <div className="w-full md:w-1/2 pr-2 bg-white shadow-lg p-4 rounded-lg mb-4 md:mb-0">
                        <h2 className="text-3xl text-orange-600 font-bold">Solar for Homes</h2>
                        <Slider {...settings}>
                            <div>
                                <img src={h1} alt="Image 1" className="w-full" />
                            </div>
                            <div>
                                <img src={h2} alt="Image 2" className="w-full" />
                            </div>
                            <div>
                                <img src={h3} alt="Image 3" className="w-full" />
                            </div>
                            <div>
                                <img src={h5} alt="Image 4" className="w-full" />
                            </div>
                            <div>
                                <img src={h6} alt="Image 5" className="w-full" />
                            </div>
                        </Slider>
                        <button className="mt-4 w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition duration-200">
                          Explore More
                        </button>
                    </div>

                    <div className="w-full md:w-1/2 pl-2 bg-white shadow-lg p-4 rounded-lg">
                        <h2 className="text-3xl text-orange-600 font-bold">Solar for Business</h2>
                        <Slider {...settings}>
                            <div>
                                <img src={b1} alt="Image 6" className="w-full" />
                            </div>
                            <div>
                                <img src={b2} alt="Image 7" className="w-full" />
                            </div>
                            <div>
                                <img src={b3} alt="Image 8" className="w-full" />
                            </div>
                            <div>
                                <img src={b4} alt="Image 9" className="w-full" />
                            </div>
                        </Slider>
                        <button className="mt-4 w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition duration-200">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heroproduct;

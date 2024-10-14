import React from 'react'

const Cards = () => {
    return (
        <div>
            <section class="mt-10 mb-10 bg-gradient-to-br from-slate-200 to-gray-500 py-16 md:py-32">
                <div class="container mx-auto px-4 md:px-8 text-center">
                    <h1 class="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">SunSolar Energy is part
                        of SHV Energy
                    </h1>
                    <p class="text-white text-lg md:text-2xl mb-12">SHV Energy is a leading global distributor of off-grid energy with 30 million customers across 4 continents. It is a wholly owned subsidiary of SHV, a global 125-year-old family business with a portfolio of companies in over 60 countries. SunSource Energy is proud to bring the stability, global view and long-term approach of SHV to India and other regions of focus.</p>

                </div>
            </section>

            <div className="text-center mb-8">
                <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                    <span class="inline-block">Mission
                        <span class="relative whitespace-nowrap text-orange-600">
                            <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full
             fill-orange-300/70" preserveAspectRatio="none">
                                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202
              4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                            <span class="relative">and
                            </span></span>
                    </span>
                    <span class="inline-block">Vission
                      
                    </span>

                </h1>
            </div>

            <div className="relative m-16">
                <button className="absolute py-1 px-3 -left-8 -top-2  border border-black shadow-[4px_4px_1px_rgb(0,0,0)] bg-orange-600 text-white font-bold">
                    OUR MISSION
                </button>
                <div className="shadow-[4px_4px_1px_rgb(234,88,12)] p-8 border text-black border-black">
                    The <span className="font-mono text-orange-600 font-bold">message</span> variable is a Laravel reserved word within this email context, so you should avoid using that as a field handle if you intend on using the email feature.
                </div>
            </div>

            <div className="relative m-16">
                <span className="absolute -z-10 w-full h-full inset-1 bg-orange-500 rounded-xl"></span>
                <button className="absolute py-1 z-10 px-3 -left-8 -top-2  shadow-[4px_4px_1px_rgb(0,0,0)] bg-orange-600 text-white font-bold">
                    OUR VISSION
                </button>
                <div className="p-8 border text-black border-black shadow-[4px_4px_1px_rgb(234,88,12)] bg-white rounded-xl z-20">
                    The <span className="font-mono text-orange-600 font-bold">message</span> variable is a Laravel reserved word within this email context, so you should avoid using that as a field handle if you intend on using the email feature.
                </div>
            </div>
        </div>
    )
}

export default Cards
import React from 'react'

const Aboutsunsolar = () => {
  return (
    <div>
      <section
        id="pricing"
        aria-label="Pricing"
        class="bg-slate-900 py-20 sm:py-32"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl md:text-center">
            <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
              <span class="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 281 40"
                  class="absolute top-1/2 left-0 h-[1em] w-full fill-orange-600"
                  preserveAspectRatio="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                  ></path>
                </svg>
                <span class="relative">About</span>
              </span>
              Us.
            </h2>
            <p class="mt-4 text-2xl text-slate-400">
              Changing the way our world is powered
            </p>
          </div>
        </div>
      </section>

      <div className=" w-screen bg-white">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">


            <div className="flex items-center w-full col-span-6">
              <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div style={{ width: '100%', height: '100%' }}>
                  <div style={{ width: '100%', height: '100%' }}>
                    <iframe
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&mute=0&controls=0"
                      id="widget2"
                      title="Video Player"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                        Who We Are
                      </span>
                    </h1>
                  </div>

                  <p className="text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    SunSolar Energy provides distributed energy solutions for commercial and industrial customers in India with a presence across South-East Asia. SunSolar develops, engineers, procures, constructs, and operates solar power projects to help institutional, industrial, commercial and non-profit sector energy users utilize solar energy more intelligently and efficiently while reducing their cost of energy.


                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Aboutsunsolar
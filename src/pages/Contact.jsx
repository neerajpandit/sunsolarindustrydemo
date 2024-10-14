import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import ServiceStatistics from '../component/solar/ServiceStatistics'

const Contact = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className='bg-white mt-20'>
                <div class="container  my-12 mx-auto px-2 md:px-4">

                    <section class=" ">

                        <div className="text-center mb-10 ">
                            <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                                <span class="inline-block">Contact
                                    <span class="relative whitespace-nowrap text-orange-600">
                                        <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full
             fill-orange-300/70" preserveAspectRatio="none">
                                            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202
              4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                                        <span class="relative">Us
                                        </span></span>
                                </span>


                            </h1>
                        </div>

                        <div class="flex flex-wrap">

                            <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">

                                <div class="mb-3 w-full">
                                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                                        Name
                                    </label>
                                    <input type="text" class="px-2 py-2 border border-black w-full outline-black bg-white rounded-md" id="exampleInput90" placeholder="Name" />
                                </div>

                                <div class="mb-3 w-full">
                                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                                        Email
                                    </label>
                                    <input type="email" class="px-2 py-2 border border-black w-full outline-black bg-white rounded-md" id="exampleInput90"
                                        placeholder="Enter your email address" />
                                </div>

                                <div class="mb-3 w-full">
                                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                                        Message
                                    </label>
                                    <textarea class="px-2 py-2 border border-black w-full  rounded-[5px]  bg-white outline-none" name="" id=""></textarea>
                                </div>

                                <button type="button"
                                    class="mb-6 inline-block w-full rounded bg-orange-600 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-orange-700">
                                    Send
                                </button>

                            </form>

                            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                <div class="flex flex-wrap">
                                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div class=" inline-block rounded-md bg-teal-400-100 p-4 text-orange-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 text-black font-bold">
                                                    Sales Enquiry
                                                </p>
                                                <p class="text-neutral-500 ">
                                                    Connect to our sales team to discuss your clean energy project.
                                                </p>
                                                <p class="text-neutral-500 ">
                                                    +1 234-567-89
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-orange-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 text-black font-bold">
                                                    Supplier Enquiry
                                                </p>
                                                <p class="text-neutral-500 ">
                                                    Connect to our procurement team.
                                                </p>
                                                <p class="text-neutral-500 ">
                                                    +1 234-567-89
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-orange-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 text-black font-bold">
                                                    Media Enquiry
                                                </p>
                                                <p class="text-neutral-500 ">
                                                    Contact our media relations team for immediate assistance with all press-related inquiries.
                                                </p>
                                                <p class="text-neutral-500 ">
                                                    +1 234-567-89
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                        <div class="flex items-start">
                                            <div class="shrink-0">
                                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-orange-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="ml-6 grow">
                                                <p class="mb-2 text-black font-bold">
                                                    General Enquiry
                                                </p>
                                                <p class="text-neutral-500 ">
                                                    f you have a general question, contact us here so that we can best route your enquiry.
                                                </p>
                                                <p class="text-neutral-500 ">
                                                    +1 234-567-89
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
<ServiceStatistics/>
            <Footer />

        </div>
    )
}

export default Contact
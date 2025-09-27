import React from 'react'
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

const Home = () => {
    return (
        <section
            name='home'
            // ✅ 라이트 모드: bg-zinc-200 / 다크 모드: bg-black
            className='flex w-full h-screen bg-zinc-200 dark:bg-gray-900 dark:text-white'
        >
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center w-full px-2 py-8 md:items-start'>
                    <p className='text-2xl dark:text-gray-300'>Use our chat platform.</p>
                    <h1 className='py-3 text-5xl font-bold md:text-7xl dark:text-white'>Chat Management</h1>
                    <p className='text-2xl dark:text-gray-300'>Chatty is the best chat platform.</p>
                    <button
                        className='py-3 px-6 sm:w-[60%] my-4
                       bg-blue-500 text-white rounded-md hover:bg-blue-600
                       dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-black'
                    >
                        Get Started
                    </button>
                </div>

                <div className="flex flex-col justify-center px-2">
                    <h2 className="font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full dark:text-white">
                        Easily download app <br className="hidden sm:block" /> Google & Apple
                    </h2>
                    <p
                        className="text-[18px] leading-[30.8px] max-w-[470px] mt-5
                       text-gray-700 dark:text-gray-300"
                    >
                        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                        placerat.
                    </p>

                    <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
                        <img
                            src={apple}
                            alt="apple_store"
                            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer dark:invert"
                        />
                        <img
                            src={google}
                            alt="google_play"
                            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer dark:invert"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

'use client';
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
    const handleDownload = () => {
        const downloadUrl = '/Gagandeep_Resume.pdf';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'Gagandeep_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className='lg:py-16'>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className='mb-4 text-4xl lg:text-8xl lg:leading-normal sm:text-5xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-secondary-600'>Hello, I&#039;m{" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Gagandeep',
                                1000,
                                'Web Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Passionate and innovative professional dedicated to transforming ideas into impactful solutions.</p>
                    <div>
                        <Link href="/#contact">
                            <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-primary-600 to-secondary-700 hover:bg-slate-200 text-white'>Hire Me</button>
                        </Link>
                        <Link href="/">
                            <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-primary-600 to-secondary-700 hover:bg-slate-900 text-white mt-3' onClick={handleDownload}>
                                <span className='block bg-[#121212] hover:bg-slate-900 rounded-full px-5 py-2'>Download CV</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero_image.png"
                            width={300}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            height={300}
                            alt="hero image"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
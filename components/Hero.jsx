import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri'

// Components
import DevImg from './DevImg'
import Badge from './Badge'
import Social from './Social'

const Hero = () => {
    return (
        <section
            className='
                py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'
            >
            <div className='container mx-auto'>
                <div className='gap-x-8 flex justify-between'>
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] xl:text-left'>Frontend Developer</div>
                        <h1 className='h1'>Hello, my name is Juan Camilo Auriti</h1>
                        <p className='subtitle'>
                            Brief description with insights into myself, my vocational journey, and what I engage in professionally.
                        </p>
                        {/* buttons */}
                    </div>
                    {/* image */}
                    <div className='xl:flex relative hidden'>Image</div>
                </div>
                <div
                className='md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce absolute hidden'>
                    <RiArrowDownSLine />
                </div>
            </div>
        </section>
    )
}

export default Hero
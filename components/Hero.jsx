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
                    <div>Text</div>
                    {/* image */}
                    <div>Image</div>
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
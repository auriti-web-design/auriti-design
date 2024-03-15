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
                    <div
                        className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div
                            className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] xl:text-left'>Frontend Developer</div>
                        <h1 className='h1'>Hello, my name is Juan Camilo Auriti</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                            Brief description with insights into myself, my vocational journey, and what I engage in professionally.
                        </p>
                        {/* buttons */}
                        <div className='gap-y-3 md:flex-row gap-x-3 xl:mx-0 flex flex-col mx-auto mb-12'>
                            <Link href='/contact'>
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant="outline" className="gap-x-2">
                                Download CV <Download size={18} />
                            </Button>
                        </div>
                        {/* social */}
                        <Social
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary dark:hover:text-primary-foreground transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className='xl:flex relative hidden'>
                        {/* badge 1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            icon={<RiBriefcase4Fill />}
                            endCountNum={10}
                            badgeText='Years Of Experience'
                        />
                        {/* badge 2 */}
                        <Badge
                            containerStyles='absolute top-[80%] -left-[1rem]'
                            icon={<RiTodoFill />}
                            endCountNum={80}
                            badgeText='Finished Projects'
                        />{/* badge 3 */}
                        <Badge
                            containerStyles='absolute top-[55%] -right-8'
                            icon={<RiTeamFill />}
                            endCountNum={9}
                            endCountText='k'
                            badgeText='Happy Clients'
                        />
                        <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                        <DevImg
                            containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                        />
                    </div>
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
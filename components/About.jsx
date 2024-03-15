import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
    User2,
    MailIcon,
    HomeIcon,
    GraduationCap,
    PhoneCall,
    Calendar,
    Briefcase
} from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Juan Camilo Auriti'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+1 234 567 890'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'info@auritidesign.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 1 Jul, 1991'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Computer Scienze'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Spoltore (PE), Italy'
    }
]

const qualData = [
    {
        title: 'education',
        data: [
            {
                university: 'Università dell&apos; Aquila',
                qualificartion: 'Bachelors of Science',
                years: '2013 - 2018',
            },
        ],
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Dromedian S.r.l.',
                qualificartion: 'WordPress Developer',
                years: 'Actually',
            },
            {
                company: 'Webshop S.a.S.',
                qualificartion: 'Front-End Developer',
                years: '2023-2024',
            },
            {
                company: 'BearIT S.r.l.',
                qualificartion: 'Front-End Developer',
                years: '2022-2023',
            },
            {
                company: 'Netsons S.r.l.',
                qualificartion: 'UI/UX Designer',
                years: '2020-2022',
            },
        ],
    },
]

const skillData = [
    {
        title: 'Skills',
        data: [
            {
                name: 'HTML, CSS'
            },
            {
                name: 'Front-End Development',
            },
            {
                name: 'React',
            },
            {
                name: 'UI/UX Design',
            },
            {
                name: 'WordPress',
            },
            {
                name: 'Graphic Design',
            }
        ],
    },
    {
        title: 'Tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ],
    },
];

const About = () => {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title xl:mb-16 mx-auto mb-8 text-center">
                    About me
                </h2>
                <div className="xl:flex-row flex flex-col">
                    {/* image */}
                    <div className="xl:flex relative flex-1 hidden">
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid grid-cols-3 xl:max-w-[520px] border">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualification</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="xl:mt-8 mt-12 text-lg">
                                {/* personal info */}
                                <TabsContent value="personal">
                                    <div className="xl:text-left text-center">
                                        <h3 className="h3 mb-4">Unmatched Service Qaulity for Over 10 Years</h3>
                                        <p className="subtitle xl:mx-0 max-w-xl mx-auto">
                                            I specialize in crafting intuitive website with cutting-edge technologies, delivering dynamic and engaging user experiences.
                                        </p>
                                        {/* icons */}
                                        <div className="xl:grid-cols-2 grid gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className="gap-x-4 xl:mx-0 flex items-center mx-auto" key={index}>
                                                        <div>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">Qualification</TabsContent>
                                <TabsContent value="skills">Skills</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
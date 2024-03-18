import DevImg from "./DevImg"; // Importazione del componente DevImg per l'immagine dello sviluppatore
import Image from "next/image"; // Importazione del componente Image di Next.js per il rendering ottimizzato delle immagini
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Importazione dei componenti per i tab

import {
    User2,
    MailIcon,
    HomeIcon,
    GraduationCap,
    PhoneCall,
    Calendar,
    Briefcase
} from 'lucide-react'; //\ Importazione delle icone da Lucide React

// Dati per le informazioni personali
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
        text: 'Nato il 1 Lug, 1991'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Scienze informatiche'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Spoltore (PE), Italia'
    }
];

// Dati per le qualifiche
const qualData = [
    {
        title: 'education',
        data: [
            {
                university: 'Coursera - Meta',
                qualification: 'Sviluppatore Web Front-end',
                years: '2023 - 2024',
            },
            {
                university: 'Università dell\'Aquila',
                qualification: 'Laurea in Scienze',
                years: '2013 - 2018',
            },
            {
                university: 'Istituti Pitagora',
                qualification: 'Diploma IT',
                years: '2006 - 2013',
            }
        ],
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Dromedian S.r.l.',
                role: 'Sviluppatore WordPress',
                years: 'Attualmente',
            },
            {
                company: 'Webshop S.a.S.',
                role: 'Sviluppatore Front-End',
                years: '2023-2024',
            },
            {
                company: 'BearIT S.r.l.',
                role: 'Sviluppatore Front-End',
                years: '2022-2023',
            },
            {
                company: 'Netsons S.r.l.',
                role: 'UI/UX Designer',
                years: '2020-2022',
            },
        ],
    },
];

// Dati per le competenze
const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS'
            },
            {
                name: 'Sviluppo Front-End',
            },
            {
                name: 'React',
            },
            {
                name: 'Design UI/UX',
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
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ],
    },
];

// Componente About
const About = () => {

    // Funzione per ottenere i dati in base al titolo
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
                    {/* Immagine */}
                    <div className="xl:flex relative flex-1 hidden">
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png'
                        />
                    </div>
                    {/* Tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid grid-cols-3 xl:max-w-[520px] border">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualification</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/* Contenuto dei tabs */}
                            <div className="xl:mt-8 mt-12 text-lg">
                                {/* Informazioni personali */}
                                <TabsContent value="personal">
                                    <div className="xl:text-left text-center">
                                        <h3 className="h3 mb-4">Unmatched Service Qaulity for Over 10 Years</h3>
                                        <p className="subtitle xl:mx-0 max-w-xl mx-auto">
                                            I specialize in crafting intuitive website with cutting-edge technologies, delivering dynamic and engaging user experiences.
                                        </p>
                                        {/* Icone */}
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
                                        {/* Lingue */}
                                        <div className="gap-y-2 flex flex-col">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-border border-b"></div>
                                            <div className="">Italian, English, Spanish</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* Qualifiche */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 xl:text-left mb-8 text-center">
                                            My Awesome Journey
                                        </h3>
                                        {/* Esperienza e istruzione */}
                                        <div className="md:grid-cols-2 gap-y-8 grid">
                                            {/* Esperienza */}
                                            <div className="gap-y-6 flex flex-col">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="font-medium capitalize">
                                                        {getData(qualData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/* Lista */}
                                                <div className="gap-y-8 flex flex-col">
                                                    {getData(qualData, 'experience').data.map((item, index) => {
                                                        const { company, role, years } = item;
                                                        return (
                                                            <div
                                                                className="gap-x-8 group flex"
                                                                key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="mb-b text-xl font-semibold leading-none">{company}</div>
                                                                    <div className="text-muted-foreground mb-4 text-lg leading-none">{role}</div>
                                                                    <div className="text-base-font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            {/* Istruzione */}
                                            <div className="gap-y-6 flex flex-col">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <h4 className="font-medium capitalize">
                                                        {getData(qualData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* Lista */}
                                                <div className="gap-y-8 flex flex-col">
                                                    {getData(qualData, 'education').data.map((item, index) => {
                                                        const { university, qualification, years } = item;
                                                        return (
                                                            <div
                                                                className="gap-x-8 group flex"
                                                                key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="mb-b text-xl font-semibold leading-none">{university}</div>
                                                                    <div className="text-muted-foreground mb-4 text-lg leading-none">{qualification}</div>
                                                                    <div className="text-base-font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* Competenze */}
                                <TabsContent value="skills">
                                    <div className="xl:text-left text-center">
                                        <h3 className="h3 mb-8">What I use everyday</h3>
                                    </div>
                                    <div className="mb-16">
                                        <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                                        <div className="border-border mb-4 border-b"></div>
                                        {/* Lista di competenze */}
                                        <div>
                                            {getData(skillData, 'skills').data.map(
                                                (item, index) => {
                                                    const { name } = item;;
                                                    return (
                                                        <div className="xl:text-left xl:mx-0 w-2/4 mx-auto text-center">
                                                            <div className="font-medium" key={index}>
                                                                {name}
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                    {/* Strumenti */}
                                    <div>
                                        <h4 className="h4 xl:text-left mb-2 text-xl font-semibold">Tools</h4>
                                        <div className="border-border mb-4 border-b"></div>
                                        <div className="gap-x-8 xl:justify-start flex justify-center" >
                                            {/* Strumenti */}
                                            {getData(skillData, 'Tools').data.map((item, index) => {
                                                const { imgPath } = item;
                                                return (
                                                    <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt='' prioriry />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About; // Esportazione del componente About

import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: "App Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
    },
];

const Services = () => {
    return (
        <section className="xl:mb-36 mb-12">
            <div className="container mx-auto">
                <h2 className="section-title xl:mb-24 mx-auto mb-12 text-center">
                    My Services
                </h2>
                {/* Grid items */}
                <div className="xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8 grid justify-center">
                    {serviceData.map((item, index) => {
                        return (
                            <Card className="w-full mx-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="mb-4">
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;

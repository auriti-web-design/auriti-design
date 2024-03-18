import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader } from './ui/card'
import { Github, Link2Icon } from "lucide-react"
import { Badge } from "./ui/badge"

const ProjectCard = ({ project }) => {
  return (
    <Card className="group relative overflow-hidden">
        <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-secondary dark:bg-secondary/40 rounded-md xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark bg-[110%] xl:bg-no-repeat overflow-hidden">
            {/* image */}
            <Image
                className="absolute bottom-0 shadow-xl"
                src={project.image}
                alt={project.name}
                width={247}
                height={250}
                priority
            />
            { /* btns link */}
            <div className="gap-x-4 flex">
                <Link
                    className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                    href={project.link}
                >
                    <Link2Icon className="text-white" />
                </Link>
                <Link
                    className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                    href={project.github}
                >
                    <Github className="text-white" />
                </Link>
            </div>
        </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
            <Badge className="top-4 left-5 absolute mb-2 text-sm font-medium uppercase">{project.category}</Badge>
            <h4 className="h4 mb-1">{project.name}</h4>
            <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>
    </Card>
  )
}

export default ProjectCard
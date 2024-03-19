'use client'

import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
      image: '/work/3.png',
      category: 'react js',
      name: 'Nexa Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
  {
      image: '/work/4.png',
      category: 'react js',
      name: 'Solstice Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
  {
      image: '/work/2.png',
      category: 'next js',
      name: 'Lumina Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
  {
      image: '/work/1.png',
      category: 'next js',
      name: 'Evolve Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
  {
      image: '/work/3.png',
      category: 'next js',
      name: 'Ignite Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
  {
      image: '/work/4.png',
      category: 'fullstack',
      name: 'Envision Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
  {
      image: '/work/1.png',
      category: 'fullstack',
      name: 'Serenity Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
  {
      image: '/work/3.png',
      category: 'next js',
      name: 'Nova Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
  {
      image: '/work/2.png',
      category: 'next js',
      name: 'Zenith Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      link: "/",
      github: '/',
  },
];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category))
];


const Projects = () => {

  const [categories, setCategories] = useState(uniqueCategories);

  const [category, setCategory] = useState('all projects');

  const filterdProject = projectData.filter((project) => {
    // if catergory is all projects show all projects else filter by category
    return category === 'all projects' ? project : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h1 className='section-title xl:mb-16 mx-auto mb-8 text-center'>My Project</h1>
        {/* tabs */}
        <Tabs
          defaultValue={category}
          className="xl:mb-48 mb-24"
        >
          <TabsList
            className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:mx-auto"
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className='xl:mt-8 lg:grid-cols-3 grid grid-cols-1 gap-4 text-lg'>
            {filterdProject.map((project, index) => {
              return (<TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
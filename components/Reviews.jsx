'use client'

import Image from 'next/image'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import { Pagination } from 'swiper/modules'

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Richard Thmpson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Evelyn Anderson',
        job: 'Interior Designer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'John Doe',
        job: 'Game Dev',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Emily Smith',
        job: 'Therapist',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Oliver Taylor',
        job: 'Engineer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Mason Wilson',
        job: 'Video Editor',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid'
    },
]

const Reviews = () => {
    return (
        <section className="xl:mb-36 mb-12">
            <div className='container mx-auto'>
                <h2 className='section-title mx-auto mb-12 text-center'>Reviews</h2>
                {/* Slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1400: {
                            slidesPerView: 3,
                        }
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className='h-[350px]'
                >
                    {reviewsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className="p-8 min-h[300px]">
                                    <CardHeader
                                        className="p-0 mb-10"
                                    >

                                        <div className='gap-x-4 flex items-center'>
                                            {/* image */}
                                            <Image
                                                src={person.avatar}
                                                alt={person.name}
                                                width={80}
                                                height={80}
                                                priority
                                            />
                                            <div className='flex flex-col'>
                                                <CardTitle>
                                                    {person.name}
                                                </CardTitle>
                                                    <p>
                                                        {person.job}
                                                    </p>
                                            </div>
                                        </div>

                                    </CardHeader>
                                    <CardDescription
                                        className="text-muted-foreground text-lg"
                                    >
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews
'use client'

import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel"

const images = [
    '/images/home/iphone.webp',
    '/images/home/iphone2.webp',
    '/images/home/iphone3.webp'
]


export default function MyCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full 2xl:w-[1500px] 2xl:mx-auto">

            <CarouselContent className="">
                {images.map((image,index) => (
                    <CarouselItem className="w-full" key={index}>
                        <img src={image} className="object-cover bg-center w-full p-6 h-[500px]    lg:h-[600px] lg:p-10" alt={`photo carousel ${index}`} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="left-[30px] bg-transparent border-none text-white  hover:bg-transparent hover:border-none hover:text-white   xl:left-[50px] xl:scale-[1.7] " />
            <CarouselNext className="right-[30px] bg-transparent border-none text-white  hover:bg-transparent hover:border-none hover:text-white   xl:right-[50px] xl:scale-[1.7]" />
        </Carousel>
    )
}


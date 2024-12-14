import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import banner1 from '../../../public/assets/images/banner-1.avif'
import banner2 from '../../../public/assets/images/banner-2.avif'
import banner3 from '../../../public/assets/images/banner-3.avif'
import banner4 from '../../../public/assets/images/banner-4.avif'
const Banner = () => {
    return (
        <>
            <div className=" flex ">

                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="bg-gray-100 flex justify-center items-center gap-40">

                            <div>
                                <div>
                                    <p className="ml-16 text-gray-400 text-md font-serif font-normal">Work light, LED, white</p>
                                </div>

                                <div>
                                    <div>
                                        <p className="text-3xl font-serif font-bold mt-2">
                                            <span className="block">Styles Accessoris &</span>
                                            <span className="block ml-2 mt-2">New Table Lamp</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Button className="ml-20 mt-4">Shop Now</Button>
                                </div>
                            </div>

                            <Image
                                src={banner1}
                                alt="banner"
                                width={500}
                                height={500}
                            ></Image>
                        </CarouselItem>
                        <CarouselItem className="bg-gray-100 flex justify-center items-center gap-40">
                        
                        <div>
                                <div>
                                    <p className="ml-8 text-gray-400 text-md font-serif font-normal">Radiant, Stylish Table Lamps</p>
                                </div>

                                <div>
                                    <div>
                                        <p className="text-3xl font-serif font-bold mt-2">
                                <span className="block mt-2">Explore Radiant </span>
                                <span className="block mt-2 ml-[-2rem]">Illumination for Your</span>
                                <span className="block ml-20 mt-2"> Space</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Button className="ml-20 mt-4">Shop Now</Button>
                                </div>
                        </div>
                            <Image
                                src={banner2}
                                alt="banner"
                                width={500}
                                height={500}
                            >
                            </Image>
                        </CarouselItem>

                        <CarouselItem className="bg-gray-100 flex justify-center items-center gap-40">
                        <div>
                                <div>
                                    <p className="ml-10 text-gray-400 text-md font-serif font-normal">Sleek, Contemporary Glow</p>
                                </div>

                                <div>
                                    <div>
                                        <p className="text-3xl font-serif font-bold mt-2">
                                <span className="block mt-2">Experience Modern </span>
                                <span className="block mt-2 ml-[-2rem]">Elegance in Innovative</span>
                                <span className="block ml-6 mt-2">  Lighting Designs</span>
                               
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Button className="ml-20 mt-4">Shop Now</Button>
                                </div>
                        </div>
                            <Image
                            src={banner3}
                            alt="banner"
                            width={500}
                            height={500}
                        >
                        </Image></CarouselItem>
                        <CarouselItem className="bg-gray-100 flex justify-center items-center gap-40">
                        <div>
                                <div>
                                    <p className="ml-14 text-gray-400 text-md font-serif font-normal">Transform with Stylish Lamps</p>
                                </div>

                                <div>
                                    <div>
                                        <p className="text-3xl font-serif font-bold mt-2">
                                <span className="block mt-2">Step into the Future of  </span>
                                <span className="block mt-2 ml-4">Lighting with Bright </span>
                                <span className="block ml-20 mt-2">Innovations</span>
                               
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Button className="ml-32 mt-4">Shop Now</Button>
                                </div>
                        </div>
                            <Image
                            src={banner4}
                            alt="banner"
                            width={500}
                            height={500}
                        >
                        </Image></CarouselItem>

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}
export default Banner;
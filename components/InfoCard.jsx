import React from 'react'
import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
function InfoCard({img, location, title, description, star, price, total}) {
    return (
        <div className=" flex-row md:flex py-7 px-6 my-2 border-b cursor-pointer hover:scale-105 hover:shadow-md transition duration-200 ease-out first:border-t rounded-2xl bg-gray-50 hover:bg-white">
            <div className="relative h-60 w-full md:h-52 md:w-80 flex-shrink-0 max-w-lg mb-6 mx-auto">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
            </div>

            <div className="flex flex-col flex-grow md:pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>

                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard

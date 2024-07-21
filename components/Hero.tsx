'use client'
import { CustomButton } from './Index'
import Image from '@/node_modules/next/image'

export default function Hero() {
    const handleScroll = () =>{

    }
  return (
    <div className='mt-28 px-5 md:px-20 flex flex-col lg:flex-row gap-1 relative z-0 max-w-[1440px] mx-auto'>
        <div className='flex flex-col w-[100%] md:w-[50%]'>
            <h1 className='text-[38px] font-bold text-[font-semibold] md:text-4xl'>
                Find, Book, or rent a car -- quickly and easily!
            </h1>

            <p className='text-[27px] text-black-100 font-light mt-5'>
                Streamline your car rental experience with our effortless booking process.
            </p>

            <CustomButton 
            title="Explore Cars"
            containerStyles= "bg-primary-blue text-white rounded-md mt-10 w-[40%] md:w-[30%]"
            handleClick= {handleScroll}
            type= {"button"}
            />
        </div>

        <div className='w-[100%] md:w-[50%] flex justify-end items-end'>
            <div className='relative xl:w-full w-[90%] lg:h-full h-[400px] z-0;'>
                <Image src='/hero.png' alt='hero' fill className='object-contain' />

                <div className='hidden md:block absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full md:h-[100%] h-[590px] overflow-hidden;'></div>
            </div>
        </div>
    </div>
  )
}

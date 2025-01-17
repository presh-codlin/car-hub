"use client";
import React from 'react'
import { Button } from '../index'
import Image from 'next/image';


function Hero() {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
        <div className='flex-1 flex-wrap pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, rent a car -- quickly and super easily!
            </h1>
            <p className='hero__subtitle'>
                Streamline your car rental experience and enjoy instant access to the best deals with our effortless booking process.
            </p>
            <Button
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10" 
                handleClick={handleScroll} 
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt="hero-image" fill className='object-contain'/>
            </div>
            <div className='hero__image-overlay'/>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { footerLinks } from '@/constants';

function Footer() {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-300 items-center'>
        <div className='flex max-md:flex-col flex-wrap justify-between items-center gap-10 sm:px-16 lg:px-10 px-6 py-10 w-full lg:max-w-[1024px] xl:max-w-[10280px] laptop:max-w-[1440px]'>
            <div className='w-full flex flex-wrap justify-between items-cneter gap-6 border-b border-gray-200 pb-8'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image src="/logo.svg" alt="logo" width={118} height={18} className='object-contain'/>
                    <p className='text-base text-gray-700'>Carhub 2024<br/> All rights reserved </p>
                </div>
                <div className='flex w-1/2 flex-col justify-center items-start gap-4'>
                    <label className='text-gray-800 font-semibold text-xl'>Subcribe for New Collections Alerts!</label>
                    <div className='w-[100%] flex h-[50px] rounded-tr-full rounded-br-full items-center border border-gray-300'>
                        <input type="Email" placeholder='Email Address' className='w-[100%] pl-4 h-full border border-r-gray-300'/>
                        <Button
                          btnType='submit'
                          title="Subcribe"
                          containerStyles="bg-primary-blue text-white rounded-tr-full rounded-br-full"
                        />
                    </div>
                </div>
            </div>
            <div className='footer__links'>
                {footerLinks.map((link)=> (
                    <div key={link.title} className='footer__link'>
                        <h3 className='font-bold'>{link.title}</h3>
                        {link.links.map((item, index)=>(
                            <Link key={index} 
                              href={item.url}
                              className='text-gray-500'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            
        </div>
        <div className='gap-4 flex flex-col justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <div className='footer__copyrights-link'>
                 <Link href="/" className='text-gray-500'>
                    Privacy Policy
                </Link>
                <Link href="/" className='text-gray-500'>
                    Terms of Use
                </Link>
            </div>
            <p>@2024 CarHub All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
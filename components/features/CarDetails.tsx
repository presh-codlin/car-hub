"use client";
import { CarProps } from '@/types';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { generateCarImageUrl } from '@/utils';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

function CarDetails({ isOpen, closeModal, car } : CarDetailsProps) {
  return (
    <>  
      <Transition show={isOpen} appear={true} as={Fragment}>
        <Dialog as='div' open={isOpen} onClose={closeModal} className="relative z-50">
          <TransitionChild as={Fragment} 
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <DialogBackdrop as='div' className="fixed inset-0 bg-black/30" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild as={Fragment} 
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className="max-w-lg max-h-[90vh] relative w-full overflow-y-auto transform rounded-2xl shadow-xl transition-all bg-white p-6 gap-5 text-left flex flex-col">
                  <button
                    type='button'
                    className='absolute top-2 right-2 w-fit rounded-full z-10 bg-primary-blue-100 p-2'
                    onClick={closeModal}
                  >
                    <Image src="/close.svg" alt='close' width={20} height={20} className='object-contain'/>
                  </button>

                  <div className='flex-1 flex flex-col gap-3'>
                    <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                      <Image src={generateCarImageUrl(car)} alt="car model" fill={true} className="object-contain"/>
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded=lg'>
                        <Image src={generateCarImageUrl(car, '29')} alt="car model" fill={true} className="object-contain"/>
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded=lg'>
                        <Image src={generateCarImageUrl(car, '33')} alt="car model" fill={true} className="object-contain"/>
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded=lg'>
                        <Image src={generateCarImageUrl(car, '13')} alt="car model" fill={true} className="object-contain"/>
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 flex flex-col gap-2'>
                    <DialogTitle as='h2' className='font-semibold text-xl capitalize'>{car.make} {car.model}</DialogTitle>
                    <Description as='div' className='mt-3 flex flex-wrap gap-4'>
                      {Object.entries(car).map(([key, value]) => (
                        <div key={key} className='flex gap-5 justify-between w-full text-right'>
                          <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                          <p className='text-black-100 font-semibold'>{value}</p>
                        </div>
                      ))}
                    </Description>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails
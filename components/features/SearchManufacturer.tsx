"use client";
import React, { useState } from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';
import { manufacturers } from '@/constants';

function SearchManufacturer({ manufacturer, setManufacturer}: SearchManufacturerProps) {
  const [query, setQuery] = useState('');
  const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item)=> {
    return item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
  })

  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}  onClose={() => setQuery('')}>
            <div className='relative w-full'>
                <ComboboxButton className="absolute top-[14px]">
                    <Image
                      src="/car-logo.svg"
                      width={20}
                      height={20}
                      className='ml-4'
                      alt="logo"
                    />
                </ComboboxButton>
                <ComboboxInput 
                  className="search-manufacturer__input"
                  placeholder='Volkswagen'
                  displayValue={(manufacturer: string)=> manufacturer}
                  onChange={(e)=> setQuery(e.target.value)}
                />

                <ComboboxOptions anchor="bottom" className="border empty:invisible">
                    {filteredManufacturers.length === 0 && query !== "" ? (
                        <ComboboxOption value={query} className="search-manufacturer__option">
                            {`Create ${query}`}
                        </ComboboxOption>
                    ) : (
                        filteredManufacturers.map((manufacturer,index) => (
                            <ComboboxOption key={index} value={manufacturer} className="data-[focus]:bg-primary-blue data-[focus]:text-white text-gray-900 relative search-manufacturer__option">
                                {manufacturer}
                            </ComboboxOption>
                        ))
                    )}
                </ComboboxOptions>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer

{/* <Transition 
as={Fragment}
leave='transition ease-in duration-100'
leaveFrom="opacity-100"
leaveTo='opacity-0'
afterLeave={()=> setQuery("")}
> */}
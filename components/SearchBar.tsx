"use client";
import React, { useState } from 'react';
import { SearchManufacturer } from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const SearchButton = ({otherClasses} : {otherClasses: string})=> (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      width={40}
      height={40}
      alt='search icon'
      className='object-contain'
    />
  </button>
)

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(manufacturer === "" && model === ""){
      return alert("Please fill in the Search bar");
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  }

  const updateSearchParams = (model: string, manufacturer: string) =>{
    const searhParams = new URLSearchParams(window.location.search);

    if(model){
      searhParams.set('model', model);
    }else{
      searhParams.delete('model');
    }

    if(manufacturer){
      searhParams.set('manufacturer', manufacturer);
    }else{
      searhParams.delete('manufacturer');
    }

    const newPathname = `${window.location.pathname}?${searhParams.toString()}`

    router.push(newPathname);
  }

  return (
    <form className='searchbar' onSubmit={(e)=>handleSearch(e)}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <div className='searchbar__item'>
        <Image 
          src="/model-icon.png"
          width={25}
          height={25}
          alt="model-icon"
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input
          type='text'
          value={model}
          name='model'
          placeholder='Tiguan'
          className='searchbar__input'
          onChange={(e)=>setModel(e.target.value)}
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar
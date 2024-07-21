"use client"

import Image from "@/node_modules/next/image";
import { SearchManufacturerProps } from "@/types/index";
import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from "react";
import { manufacturers } from "@/constants/index";


export default function SearchManufacturer({manufacturer, Setmanufacturer} : SearchManufacturerProps ) {

    const [query, Setquery] = useState('');
    const filterManufacturers = 
    query === "" ? manufacturers : 
    manufacturers.filter((item) => (
    item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g,"")))) //the replace is to ensure that even when the sure types and there is space there the search bar wouls still work

  return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={Setmanufacturer}>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image src='/car-logo.svg' width={20} height={20} alt='Car logo' className="ml-4" />
                </Combobox.Button>
                
                <Combobox.Input 
                className="search-manufacturer__input"
                placeholder="Volkswagen"
                displayValue={(manufacturer :string) => manufacturer}
                onChange={(e) => Setquery(e.target.value)}/>

                <Transition 
                as={Fragment}
                Leave='transition ease-in duration-100'
                LeaveFrom='opacity-100'
                LeaveTo='opacity-0'
                afterLeave={() => Setquery("")}> 
                    <Combobox.Options>
                        {
                            filterManufacturers.map((item) =>(
                                <Combobox.Option
                                key={item}
                                className={({ active }:any) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} value={item}>{item}</Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

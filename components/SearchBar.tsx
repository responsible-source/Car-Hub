'use client'

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"


export default function SearchBar() {
    const [manufacturer, Setmanufacturer] = useState("")
    const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
               manufacturer={manufacturer}
               Setmanufacturer={Setmanufacturer} />
        </div>
    </form>
  )
}

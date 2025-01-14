import React from "react"
import { useState } from "react"

import './volcanoesList.css'
import List from "../../components/displayList/list"
import SearchVolcanoesButton from "../../components/searchVolcanoesButton/searchVolcanoesButton"

export default function VolcanoesList() {
    const [country, setCountry] = useState("");
    const [distance, setDistance] = useState("");

    return (
        <div className="volcanoesListPage">
                <div className="volcanoes_search">
                    <h2>Looking for specific volcanoes?</h2>
                    <SearchVolcanoesButton setCountry={setCountry} setDistance={setDistance}/>
                </div>  
                <div className="volcanoes_list">
                    {country ? (<List country={country} distance={distance}/>) : null}
                </div>
        </div>
    )
}
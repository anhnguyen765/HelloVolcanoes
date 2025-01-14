import React from "react";
import { useState } from "react";

import './searchVolcanoesButton.css';

export default function SearchVolcanoesButton({ setCountry, setDistance }) {
    const [inputCountry, setInputCountry] = useState("");
    const [inputDistance, setInputDistance] = useState("");
    const [fetchMessage, setFetchMessage] = useState("");

    const volcanoesCountriesURL = 'http://4.237.58.241:3000/countries';
    const countriesAroundTheWorldURL = `https://restcountries.com/v3.1/name/`;

    const searchButtonEvent = () => {
        if(inputCountry === "") {
            setFetchMessage("Please enter a country");
        } else {
            isValidCountry(inputCountry)
        }
    };

    const isValidCountry = (country) => {
        fetch(countriesAroundTheWorldURL + country)
        .then(res => res.json())
        .then(data => {
            if (data.status === 404) {
                setFetchMessage("Invalid country. Please try again.");
            } else {
                fetch(volcanoesCountriesURL).then(res => res.json())
                .then(countries => {
                    if (countries.includes(country)) {
                        setFetchMessage("");
                        setCountry(country);
                        setDistance(inputDistance);
                    } else {
                        setFetchMessage("Country not found in the list of countries with volcanoes. Please try again.");
                    }
                
                })
            }
        })
    };

    return (
        <div className="search_volcanoes_button">
            <form>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" placeholder="Country" onChange={e => setInputCountry(e.target.value)}></input>
                <br />
                <label htmlFor="distance">Populated within (km):</label>
                <select id="distance" placeholder="Kilometres" onChange={e => setInputDistance(e.target.value)}>
                    <option value="">--</option>
                    <option value="5km">5km</option>
                    <option value="10km">10km</option>
                    <option value="30km">30km</option>
                    <option value="100km">100km</option>
                </select>
            </form>
            <button onClick={searchButtonEvent}>Search</button>
            <br/>
            {fetchMessage ? (
                <p>{fetchMessage}</p>
            ): null}
        </div>
    )
}
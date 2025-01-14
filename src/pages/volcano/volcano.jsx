import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Map, Marker } from 'pigeon-maps';
import {
    Chart,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import './volcano.css';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Colors);

export default function Volcano() {

    const navigate = useNavigate();

    const [volcanoDetails, setVolcanoDetails] = useState([]);
    const [searchParams] = useSearchParams();
    const [authenticated, setAuthenticated] = useState(false);

    const volcanoFetchURL = 'http://4.237.58.241:3000/volcano'

    const volcanoId = searchParams.get('id');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthenticated(true);
        }
        volcanoFetch();
    }, [volcanoId]);

    const volcanoFetch = () => {
        const headers = localStorage.getItem('token') ? {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        } : {}
        fetch(`${volcanoFetchURL}/${volcanoId}`, {
            headers: headers  
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error('Unauthorised')
                }
                return res.json()
            })
            .then(data => setVolcanoDetails(data))
            .catch(error => console.error("Error: ", error));
    }


    // Map settings
    const [mapCenter, setMapCenter] = useState(["", ""])

    useEffect(() => {
        if (volcanoDetails.latitude && volcanoDetails.longitude) {
            setMapCenter([parseFloat(volcanoDetails.latitude), parseFloat(volcanoDetails.longitude)])
        }
    },[volcanoDetails])

    const data = {
        labels: ['5km', '10km', '30km', '100km'],
        datasets: [
            {
                label: 'Population',
                data: [volcanoDetails.population_5km, volcanoDetails.population_10km, volcanoDetails.population_30km, volcanoDetails.population_100km],
                backgroundColor: '#F59646',
                borderColor: '#F59646',
                color: '#F3D18C'
            },
        ],
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    }
    return (
        <div className="volcano">
            <div className="volcano_details">
                <a onClick={() => navigate(-1)}>Go back</a>
                <h1>{volcanoDetails.name}</h1>
                <h2>{volcanoDetails.country}</h2>
                <h3>Region:       </h3><p> {volcanoDetails.region}</p>
                <h3>Subregion:    </h3><p> {volcanoDetails.subregion}</p>
                <h3>Last eruption:</h3><p> {volcanoDetails.last_eruption}</p>
                {authenticated ? (
                    <div className="authenticated_info">
                        <h3>Summit:</h3>    <p>{volcanoDetails.summit} m</p>
                        <h3>Elevation:</h3> <p>{volcanoDetails.elevation} ft</p>
                        <div>
                            <h3>Population within a certain radius:</h3>
                            <Bar
                                data={data}
                                options={options}
                            ></Bar>
                        </div>
                    </div>
                ): (
                    <div className="unauthenticated_info">
                        <h3>Log in to see more information</h3>
                        <button onClick={()=>{
                            navigate("/login")
                        }}>Login Now</button>
                    </div>
                )}
            </div>
            <div className="volcano_map">
                <Map
                    width={'75vw'}
                    center={mapCenter}
                    zoom={10}
                > 
                    <Marker
                        anchor={mapCenter}
                        height={50}
                        width={50}
                    />
                </Map>
            </div>
        </div>
    )
}
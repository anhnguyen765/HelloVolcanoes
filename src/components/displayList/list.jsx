import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import './list.css';

export default function List({ country, distance }) {
    const baseURL = 'http://4.237.58.241:3000';

    const navigate = useNavigate();

    const [rowData, setRowData] = useState([]);

    const columns = [
        { headerName: "Name", field: "name", sortable: true},
        { headerName: "Region", field: "region", sortable: true},
        { headerName: "Subregion", field: "subregion", sortable: true},
        { headerName: "Country", field: "country"}
    ];

    useEffect(() => {
        let url = `${baseURL}/volcanoes/?country=${country}`;
        if (distance) {
            url += `&populatedWithin=${distance}`;
        }
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            const volcanoes =  data.map(volcano => {
                return {
                    id: volcano.id,
                    name: volcano.name,
                    country: volcano.country,
                    region: volcano.region,
                    subregion: volcano.subregion
                }
            })
            setRowData(volcanoes);
        })
        .catch(error => {
            console.error('Error:', error);
            setRowData([]);
        })
    }, [country, distance]);

    return (
        <div className='ag-theme-quartz-dark'>
            <AgGridReact
            columnDefs={columns}
            rowData={rowData}
            pagination={true}
            paginationPageSize={8}
            onRowClicked={(row)=> navigate(`/volcano?id=${row.data.id}`)}
            />
        </div>
    )
}
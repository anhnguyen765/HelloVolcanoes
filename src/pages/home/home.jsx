import "./home.css"
import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div id="heading">
                    <h1>Hello Volcanoes</h1>
                    <hr id="divider" />
                    <h2>Explore the Fiery Depths</h2>
                </div>
                <img id="background_image" src="public/assets/volcanoes/izabela-kraus-unsplash.jpg" alt="Volcano by Izabela Kraus" />
                <p>Photo by <a href="https://unsplash.com/@izabelakraus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Izabela Kraus</a> on <a href="https://unsplash.com/photos/a-volcano-erupts-lava-as-the-sun-sets-179_TGWlZtQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
            </div>
            <div className="volcanoes_highlight">
                <div className="volcano_highlight">
                    <h3>Erebus - Antartica</h3>
                    <p>Erebus is “one of the more accessible systems in the world, if not the most accessible” <a href="https://eos.org/articles/unlocking-the-magmatic-secrets-of-antarcticas-mount-erebus" target="_blank">Jenessa Duncombe, Eos.org</a></p>
                    <div className="volcano_image">
                        <img src="../public/assets/volcanoes/erebus.jpg" alt="Mount Erebus by Josh Landis" />
                        <p className="image_credit">Photo by <a href="https://photolibrary.usap.gov/PhotoDetails.aspx?filename=oldcrater.jpg" target="_blank">Josh Landis</a></p>
                    </div>
                </div>
                <div className="volcano_highlight">
                    <h3>Kilauea - Hawaii, USA</h3>
                    <p>Kilauea is the youngest and most active volcano on the island of Hawaii, and one of the busiest in the world. <a href="https://www.nps.gov/havo/learn/nature/kilauea.htm" target="_blank">National Park Service</a></p>
                    <div className="volcano_image">
                        <img src="../public/assets/volcanoes/kilauea.jpg" alt="Kilauea by F. Trusdell on USGS" />
                        <p className="image_credit">Photo by <a href="https://www.usgs.gov/media/images/kilauea-summit-eruption-jan-3-2021-715-am-hst" target="_blank">F. Trusdell on USGS</a></p>
                    </div>
                </div>
            </div>
            <h2 id="explore_more"><Link to='/volcanoes'>Explore more Volcanoes</Link> </h2>
        </div>

    )
}
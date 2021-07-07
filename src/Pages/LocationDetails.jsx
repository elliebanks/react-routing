import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const LocationDetails = () => {
    const { id } = useParams();
    const [location, setLocations] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${id}`)
            .then(res => res.json())
            .then(location => setLocations(location))
    }, [location]);

    return (
        <main className="container">
            <Navbar />
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card shadow my-2">
                        <div className="card-body">
                            <h1>{location?.name}</h1>
                            <p>Climate: {location?.climate}</p>
                            <p>Terrain: {location?.terrain}</p>
                            <p>Surface Water: {location?.surface_water}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default LocationDetails;
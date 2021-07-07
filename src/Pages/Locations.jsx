import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';


const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/locations')
            .then(res => res.json())
            .then(locations => setLocations(locations))
    }, []);

    return (
        <>
        <NavBar />
        <main className="container">
            <section className="row justify-content-center mt-5">
                {locations.map(location => (
                    
                    <div className="col-md-6" key={location.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{location.name}</h4>
                                <Link className="btn btn-primary btn-sm w-25 m-2" to={`/locations/${location.id}`}>Location Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
        </>
    );
}


export default Locations;
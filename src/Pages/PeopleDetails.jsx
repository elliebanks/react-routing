import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const PeopleDetails = () => {
    const { id } = useParams();
    const [people, setPeople] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
            .then(res => res.json())
            .then(people => setPeople(people))
    }, [people]);

    return (
        <main className="container">
            <Navbar />
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card shadow my-2">
                        <div className="card-body">
                            <h1>{people?.name}</h1>
                            <p className="card-subtitle text-muted">Gender: {people?.gender}</p>
                            <p className="card-subtitle text-muted">Age: {people?.age}</p>
                            <p className="card-subtitle text-muted">Eye Color: {people?.eye_color}</p>
                            <p className="card-subtitle text-muted">Hair Color: {people?.hair_color}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default PeopleDetails;


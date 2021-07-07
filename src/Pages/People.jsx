import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => setPeople(people))
    }, []);

    return (
        <>
        <NavBar />
            <main className="container">
                <section className="row justify-content-center mt-5">
                    {people.map(people => (
                        <div className="col-md-6" key={people.id}>
                            <div className="card shadow my-2">
                                <div className="card-body">
                                    <h4 className="card-title">{people.name}</h4>
                                    <Link className="btn btn-primary btn-sm w-25 m-2" to={`/people/${people.id}`}>Character Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
};


export default People;
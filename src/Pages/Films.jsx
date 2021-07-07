import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';


const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => setFilms(films))
    }, []);

    return (
        <>
        <NavBar />
        <main className="container">
            <section className="row justify-content-center mt-5">
                {films.map(film => (
                    
                    <div className="col-md-6" key={film.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{film.title}</h4>
                                <Link className="btn btn-primary btn-sm w-25 m-2" to={`/films/${film.id}`}>Film Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
        </>
    );
}


export default Films;
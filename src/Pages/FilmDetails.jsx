import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const FilmDetails = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res => res.json())
            .then(film => setFilm(film))
    }, [film]);

    return (
        <main className="container">
            <Navbar />
            <section className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card shadow my-2">
                        <div className="card-body">
                            <h1>{film?.title}</h1>
                            <p>Original Title: <br />{film?.original_title}</p>
                            <p>Director: <br />{film?.director}</p>
                            <p>Producer: <br />{film?.producer}</p>
                            <p>Description: <br />{film?.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default FilmDetails;
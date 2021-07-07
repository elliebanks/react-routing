import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">Studio Ghibli Wiki</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to={`/`}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to={`/films`}>Films</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to={`/people`}>Characters</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to={`/locations`}>Locations</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
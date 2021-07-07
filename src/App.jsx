import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Films from './Pages/Films';
import FilmDetails from './Pages/FilmDetails';
import People from './Pages/People';
import PeopleDetails from './Pages/PeopleDetails';
import Locations from './Pages/Locations';
import LocationDetails from './Pages/LocationDetails';



const App = () => {
    return (
        
            <BrowserRouter>
                <>
                    <Switch>
                        {/*Always have your most specific paths on top and least specific 
                on bottom if you aren't using 'exact' path */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/films">
                            <Films />
                        </Route>
                        <Route exact path="/films/:id">
                            <FilmDetails />
                        </Route>
                        <Route exact path="/people">
                            <People />
                        </Route>
                        <Route exact path="/people/:id">
                            <PeopleDetails />
                        </Route>
                        <Route exact path="/locations">
                            <Locations />
                        </Route>
                        <Route path="/locations/:id">
                            <LocationDetails />
                        </Route>
                        <Route path="*">
                            {() => <h1>404 Page Not Found!</h1>}
                        </Route>

                    </Switch>
                </>
            </BrowserRouter>
        
    );
};

export default App;
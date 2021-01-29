import React from 'react';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from './components/pages/Home';

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <div>
                <Route exact path='/' component={Home} />
            </div>
        </Router>
    );
};

export default App;

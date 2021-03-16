import React from "react";
import ReactDOM from 'react-dom';
import App from './views/app/App';
import {BrowserRouter as Router, withRouter} from "react-router-dom";

import './index.scss';

const RouterApp = withRouter(App);

const Root = (
    <Router>
        <RouterApp/>
    </Router>
);

ReactDOM.render(
    Root,
    document.getElementById('root')
);

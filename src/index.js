import React from "react";
import ReactDOM from "react-dom";

import '@popperjs/core';



import 'jquery';
import 'popper.js';
import 'bootstrap';




import App from './App';

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ViewAbout from "./ViewAbout";
import Layout from "./Layout";
import Service from "./Service";
import Project from "./Project";
import ViewTeam from "./ViewTeam";
import Blog from "./Blog"
import ViewContact from "./ViewContact";

/*global.jQuery = require('jquery');
/*require('bootstrap');*/


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
document.getElementById("root")
);

reportWebVitals();

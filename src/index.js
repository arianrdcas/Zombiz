import React from "react";
import ReactDOM from "react-dom";

import '@popperjs/core';



import 'jquery';
import 'popper.js';
import 'bootstrap';


/*bootstrap.min.css*/

import './assets/css/bootstrap.min.css';

/*style.css*/
import './assets/css/style.css';


/*responsive.css*/
import './assets/css/responsive.css';




/*bootsnav*/
import './assets/css/bootsnav.css';


import './assets/css/font-awesome.min.css'; // coloca los iconos del HeaderStart*/
import './assets/css/animate.css';
import './assets/css/hover-min.css';
import './assets/css/magnific-popup.css';

/*owl.carousel.css*/
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';


import Layout from './Layout';

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";


/*global.jQuery = require('jquery');
/*require('bootstrap');*/


ReactDOM.render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>,
document.getElementById("root")
);

reportWebVitals();

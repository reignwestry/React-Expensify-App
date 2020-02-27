"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
//REACT-ROUTER-DOM import
// using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const AddExpensePage = () => (
    <div>
        This is from add expense Component.
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from edit expense Component.
    </div>
);

const HelpPage = () => (
    <div>
        This is from Help Page Component.
    </div>
);

// using CommonJS modules
const routes = (
    <BrowserRouter>
        <div>

            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />

        </div>
    </BrowserRouter>
);




ReactDOM.render( routes, document.getElementById('app'));

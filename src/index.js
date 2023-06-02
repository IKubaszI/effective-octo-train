import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// Import the necessary components
import Home from './components/home';
import NotFound from './components/notFound';
import Posts from './components/posts';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="posts" element={<Posts/>}/>
                    <Route
                        path="*"
                        element={
                            <NotFound/>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);



reportWebVitals();

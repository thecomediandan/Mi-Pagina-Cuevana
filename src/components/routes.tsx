/**
 * Las rutas en React se definen de la siguiente manera:
 * npm install react-router-dom
 * 
 */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';

const MainRoutes = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </Router>
    );
}
import React from 'react';
import Header from './Components/header.jsx';
import TableWrapper from './Components/tableWrapper.jsx';
import Home from './home.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export default function App(props) {
    const routes = [
        {path: '/admin/compilations', element: <TableWrapper type={'compilations'} />},
        {path: '/admin/profiles', element: <TableWrapper type={'profiles'} />},
        {path: '/admin/photos', element: <TableWrapper type={'photos'} />},
        {path: '/admin/compilation/:id', element: <TableWrapper type={'compilation'} />},
        {path: '/admin', element: <Home />}
    ]

    return (
        <Router>
            <div className={'mmd-admin'}>
                <Header/>
                <Routes>
                    {routes.map((route, key) => (
                        <Route path={route.path} element={route.element} key={key} />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

import React from 'react';
import Header from './Components/header.jsx';
import TableWrapper from './Components/tableWrapper.jsx';
import Home from './Components/home.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export default function App(props) {
    return (
        <Router>
            <div className={'mmd-admin'}>
                <Header/>
                <Routes>
                    <Route path="/admin/compilations" element={<TableWrapper type={'compilations'} />} />
                    <Route path="/admin/profiles" element={<TableWrapper type={'profiles'} />} />
                    <Route path="/admin/photos" element={<TableWrapper type={'photos'} />} />
                    <Route path="/admin/compilation/:id" element={<TableWrapper type={'compilation'} />} />
                    <Route path="/admin" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

import ReactDOM from 'react-dom/client';
import React from 'react';
import Header from './Components/header.jsx';
import Table from "./Components/table.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Table />
    </div>
);

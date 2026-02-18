import img01 from "./content/image01.png";
import './styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <header>
            <h1>Hola mundo</h1>
        </header>
        <main>
            <img src={img01} />
            <p>API Base: {process.env.API_BASE}</p>
        </main>
    </div> 
);
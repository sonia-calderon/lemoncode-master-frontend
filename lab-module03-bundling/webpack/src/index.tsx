import './styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./components/header";
import Card from './components/card';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Header></Header>
        <Card></Card>    
    </> 
);
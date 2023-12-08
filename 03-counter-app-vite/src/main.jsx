import React from 'react'
import ReactDOM from 'react-dom'
import { CounterApp } from './CounterApp'
import './styles.css' 
// import { FirstApp } from './FirstApp';
 
//Renderizar nuestra app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20} />
    </React.StrictMode>
);
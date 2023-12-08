import React from 'react'
import ReactDOM from 'react-dom'
import { CounterApp } from './CounterApp'
import './styles.css' 
import { FirstApp } from './FirstApp';
 
//Renderizar nuestra app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Hola soy un titulo'/>
    </React.StrictMode>
);
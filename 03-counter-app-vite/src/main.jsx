import React from 'react'
import ReactDOM from 'react-dom'
import { CounterApp } from './CounterApp'
// import {FirstApp} from './FirstApp'
import './styles.css' 

//Renderizar nuestra app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = {10}/>
    </React.StrictMode>
);
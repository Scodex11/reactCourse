import React from 'react'
import ReactDOM from 'react-dom'
import {FirstApp} from './FirstApp'
import './styles.css' 

//Renderizar nuestra app
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp />
    </React.StrictMode>
);
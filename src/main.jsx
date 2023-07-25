import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './components/CounterApp'
import './style/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={12} />
    </React.StrictMode>
)
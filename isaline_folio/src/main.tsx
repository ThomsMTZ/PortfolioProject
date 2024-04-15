import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Hello } from './NewComponent.tsx'
import App from './App.tsx'


const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Hello />
    <App />
  </React.StrictMode>,
)

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProviders } from './context'; // ✅ Importer les providers
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProviders>  {/* ✅ ENVELOPPER L'APPLICATION */}
            <App />
        </AppProviders>
    </React.StrictMode>
);
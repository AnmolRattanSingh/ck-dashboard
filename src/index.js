import React from 'react';
import ReactDOMClient from 'react-dom/client';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { VoteState } from './context/voteContext/VoteState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <VoteState>
        <App />
      </VoteState>
    </BrowserRouter>
  </React.StrictMode>,
)

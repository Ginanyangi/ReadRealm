import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReadingListProvider } from './components/ReadingListContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ReadingListProvider>
    <App />
    </ReadingListProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutsContextProvider } from '../context/WorkoutContext.jsx'
import { AuthsContextsProvider }  from '../context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <AuthsContextsProvider>
  <WorkoutsContextProvider>
  <App />
  </WorkoutsContextProvider>
  </AuthsContextsProvider>

  </React.StrictMode>
 
 
)

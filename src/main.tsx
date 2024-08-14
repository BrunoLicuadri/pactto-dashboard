import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Home from './routes/menu-home/home.tsx'
import NotFound from './routes/not-found/notFound.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path='*' element={<NotFound text='Page Not Found' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
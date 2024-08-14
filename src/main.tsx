import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Home from './routes/menu-home/home.tsx'
import NotFound from './routes/not-found/notFound.tsx'
import WorkInProgress from './routes/workingInProgress/workInProgress.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="pacttos" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="videos-to-review" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="shared-links" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="personal-info" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="packages" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="profile" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="library" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="subscription" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="review-settings" element={<WorkInProgress text='Work In Progress' />} />
          <Route path='*' element={<NotFound text='Page Not Found' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
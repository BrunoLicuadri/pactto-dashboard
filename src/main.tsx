import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Home from './routes/menu-home/home.tsx'
import NotFound from './routes/not-found/notFound.tsx'
import WorkInProgress from './routes/workingInProgress/workInProgress.tsx'
import PacttosChats from './routes/paccttosChats/pacttosChat.tsx'
import VideosToReview from './routes/videosToReview/videosToReview.tsx'
import WebLinksCreated from './routes/webLinksCreated/webLinksCreated.tsx'
import PersonalInfo from './routes/personal-info/personalInfo.tsx'
import PackagesForSale from './routes/packagesForSale/packages-for-sale.tsx'
import Library from './routes/library/library.tsx'
import Subscription from './routes/subcription/subscription.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="pacttos" element={<PacttosChats text='Pacttos (Chat)' />} />
          <Route path="videos-to-review" element={<VideosToReview text='There are no review requests sent to you' />} />
          <Route path="shared-links" element={<WebLinksCreated
            text1='There are no public web links you created'
            text2='There are no private web links you created' />} />
          <Route path="personal-info" element={<PersonalInfo/>} />
          <Route path="packages" element={<PackagesForSale />} />
          <Route path="profile" element={<WorkInProgress text='Work In Progress' />} />
          <Route path="library" element={<Library subtitle='Select a video' />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="review-settings" element={<WorkInProgress text='Work In Progress' />} />
          <Route path='*' element={<NotFound text='Page Not Found' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
import './App.css'
import { NavLink, Link, Outlet } from 'react-router-dom'
import MenuHome from './components/menuHome/menuHome'
import PacttosChat from './components/menuPacttosChat/pacttosChat'
import WebLink from './components/menuWebLink/menuWebLink'
import PersonalInfo from './components/menuPersonalInfo/personalInfo'
import ReviewPackage from './components/menuReviewPackage/reviewPackage'
import Profile from './components/menuProfile/profile'
import ReferenceVideo from './components/menuReferenceVideo/referenceVideo'
import Subscription from './components/menuSubscription/subscription'
import ReviewSettings from './components/menuReviewSettings/reviewSettings'

export default function App() {

  return (
    <>
      <div className='dflex page-container'>
        <nav className="nav-container">
          <div className="nav-info-container">
            <div className="header-menu-container">
              <Link to="/home">
                <div>
                  <img className="pactto-header-logo" src="https://app.pactto.com/assets/images/pactto-logo.svg" alt="Pactto Logo" />
                </div>
              </Link>
              <span className="close-button-container">
                <div className="close-button-pos">
                  <p>X</p>
                </div>
              </span>
            </div>
            <div className="subtitle">
              <h2>your pactto profile</h2>
            </div>
            <div className="user-info-conainer">
              <div className="user-acc-info">
                <Link to="/profile">
                  <span>
                    <img className="userAvatarImg" src="https://app.pactto.com/assets/images/avatar-placeholder.png" alt="Avatar-profile" />
                  </span>
                </Link>
                <div className="business-chart">
                  <div className="trial-info">
                    <p>TRIAL: 14 DAYS LEFT</p>
                  </div>

                  <div className="pactto-package">
                    <div className="package-info">
                      pactto pro
                    </div>
                    <span className=" upgrade-container upgrade-text">
                      <p>upgrade</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="user-name-text user-name-container">
                <h2>Bruno Luiz Licuadri</h2>
              </div>

              <div className="membership-container membership-text">
                <p>Pactto member since 2024</p>
              </div>

            </div>

          </div>

          <div className="nav-menu-container">

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to={"/home"}>
              <MenuHome text='Home' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/pacttos">
              <PacttosChat text='Pacttos(Chats)' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/videos-to-review">
              <PacttosChat text='Items to review' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/shared-links">
              <WebLink text='Web links you created' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/personal-info">
              <PersonalInfo text='Personal Information' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/packages">
              <ReviewPackage text='Review packages for sale' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/profile">
              <Profile text='Pactto website' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/library">
              <ReferenceVideo text='Reference video library' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/subscription">
              <Subscription text='Subscriptions' />
            </NavLink>

            <NavLink
              className={({ isActive }) => isActive ? "active-menu" : "inactive-menu"}
              to="/review-settings">
              <ReviewSettings text='Review Settings' />
            </NavLink>
          </div>


          <div className='flex-grow'>
          </div>


          <div className="logout-container">
            <div className="logout-text">
              <p>logout</p>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );

}

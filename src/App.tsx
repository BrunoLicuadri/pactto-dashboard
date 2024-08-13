import './App.css'
import homeIcon from './assets/icons8-home.svg'
import chatIcon from './assets/icons8-chats-96.png'
import videoGallery from './assets/icons8-video-gallery-96.png'
import webLink from './assets/icons8-link-96.png'
import userIcon from './assets/icons8-usuário-de-gênero-neutro-96.png'
import redeemIcon from './assets/icons8-resgatar-96.png'
import carouselIcon from './assets/icons8-view-carousel-100.png'
import videoIcon from './assets/icons8-video-96.png'
import videoListIcon from './assets/icons8-lista-de-reprodução-de-vídeo-100.png'
import settingsIcon from './assets/icons8-configurações.svg'
import { Link } from 'react-router-dom'

export default function App() {

  return (
    <>
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

          <Link to="/home">
            <div className="dflex nav-menu">
              <img src={homeIcon} alt="icons8-Home" />
              <h3>Home</h3>
            </div>
          </Link>

          <Link to="/pacttos">
            <div className="dflex nav-menu">
              <img src={chatIcon} alt="icons8-Chats" />
              <h3>Pacttos(Chats)</h3>
            </div>
          </Link>

          <Link to="/videos-to-review">
            <div className="dflex nav-menu">
              <img src={videoGallery} alt="icons8-Video-Galery" />
              <h3>Items to review</h3>
            </div>
          </Link>

          <Link to="/shared-links">
            <div className="dflex nav-menu">
              <img src={webLink} alt="icons8-WebLink" />
              <h3>Web links you created</h3>
            </div>
          </Link>

          <Link to="/personal-info">
            <div className="dflex nav-menu">
              <img src={userIcon} alt="icons8-User" />
              <h3>Personal Information</h3>
            </div>
          </Link>

          <Link to="/packages">
            <div className="dflex nav-menu">
              <img src={redeemIcon} alt="icons8-Redeem-Package" />
              <h3>Review packages for sale</h3>
            </div>
          </Link>

          <Link to="/profile">
            <div className="dflex nav-menu">
              <img src={carouselIcon} alt="icons8-View-Carousel" />
              <h3>Pactto website</h3>
            </div>
          </Link>

          <Link to="/library">
            <div className="dflex nav-menu">
              <img src={videoIcon} alt="icons8-Video" />
              <h3>Reference video library</h3>
            </div>
          </Link>

          <Link to="/subscription">
            <div className="dflex nav-menu">
              <img src={videoListIcon} alt="icons8-Subscriptions" />
              <h3>Subscriptions</h3>
            </div>
          </Link>

          <Link to="/review-settings">
            <div className="dflex nav-menu">
              <img src={settingsIcon} alt="icons8-Settings" />
              <h3>Review Settings</h3>
            </div>
          </Link>

        </div>


        <div className='flex-grow'>
        </div>


        <div className="logout-container">
          <div className="logout-text">
            <p>logout</p>
          </div>
        </div>


      </nav>
    </>
  );

}

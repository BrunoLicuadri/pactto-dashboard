import './App.css'
import iconClose from './assets/icons8-close60.png'
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

export default function App() {

  return (
    <>
      <nav className="nav-container">
        <div className="nav-info-container">
          <div>
            <span>
              <img className="pactto-header-logo" src="https://app.pactto.com/assets/images/pactto-logo.svg" alt="Pactto Logo" />
            </span>
            <span className="close-button-container">
              <img className="header-close-button" src={iconClose} alt="icons8-close60" />
            </span>
          </div>
          <div className="subtitle">
            <h2>your pactto profile</h2>
          </div>
          <div>
            <span>
              <img className="userAvatarImg" src="https://app.pactto.com/assets/images/avatar-placeholder.png" alt="Avatar-profile" />
            </span>
            <span>
              <p>TRIAL: 14 DAYS LEFT</p>
              <div>
                PACTTO PRO
              </div>
            </span>
            <span>
              <p>upgrade</p>
            </span>
          </div>
          <div>
            <h2>Bruno Luiz Licuadri</h2>
            <p>Pactto member since 2024</p>
          </div>

        </div>

        <div className="nav-menu-container">
          <div className="dflex nav-menu">
            <img src={homeIcon} alt="icons8-Home" />
            <h3>Home</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={chatIcon} alt="icons8-Chats" />
            <h3>Pacttos(Chats)</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={videoGallery} alt="icons8-Video-Galery" />
            <h3>Items to review</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={webLink} alt="icons8-WebLink" />
            <h3>Web links you created</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={userIcon} alt="icons8-User" />
            <h3>Personal Information</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={redeemIcon} alt="icons8-Redeem-Package" />
            <h3>Review packages for sale</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={carouselIcon} alt="icons8-View-Carousel" />
            <h3>Pactto website</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={videoIcon} alt="icons8-Video" />
            <h3>Reference video library</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={videoListIcon} alt="icons8-Subscriptions" />
            <h3>Subscriptions</h3>
          </div>
          <div className="dflex nav-menu">
            <img src={settingsIcon} alt="icons8-Settings" />
            <h3>Review Settings</h3>
          </div>
        </div>
        <div className="logout-container">
          <div>
            <p>logout</p>
          </div>
        </div>


      </nav>
    </>
  );

}

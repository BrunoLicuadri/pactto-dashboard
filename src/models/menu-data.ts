import homeIcon from '../assets/icons8-home.svg'
import chatIcon from '../assets/icons8-chats-96.png'
import videoGallery from '../assets/icons8-video-gallery-96.png'
import webLink from '../assets/icons8-link-96.png'
import userIcon from '../assets/icons8-usuário-de-gênero-neutro-96.png'
import redeemIcon from '../assets/icons8-resgatar-96.png'
import carouselIcon from '../assets/icons8-view-carousel-100.png'
import videoIcon from '../assets/icons8-video-96.png'
import videoListIcon from '../assets/icons8-lista-de-reprodução-de-vídeo-100.png'
import settingsIcon from '../assets/icons8-configurações.svg'


const sideMenu = [
    {
        id: 1,
        img: {homeIcon},
        name: "Home"
    },
    {
        id: 2,
        img: { chatIcon },
        name: "Pacttos (Chat)"
    },
    {
        id: 3,
        img: { videoGallery },
        name: "Items to review"
    },
    {
        id: 4,
        img: { webLink },
        name: "Web links you created"
    },
    {
        id: 5,
        img: { userIcon },
        name: "Personal Information"
    },
    {
        id: 6,
        img: { redeemIcon },
        name: "Review packages for sale"
    },
    {
        id: 7,
        img: { carouselIcon },
        name: "Pactto website"
    },
    {
        id: 8,
        img: { videoIcon },
        name: "Reference video library"
    },
    {
        id: 9,
        img: { videoListIcon },
        name: "Subscription"
    },
    {
        id: 10,
        img: { settingsIcon },
        name: "Review Settings"
    }
]

export function getSideMenu(){
    return sideMenu;
}
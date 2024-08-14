import videoGallery from '../../assets/icons8-video-gallery-96.png'

type Props = {
    text: string;
}

export default function PacttosChat({ text }: Props) {

    return (
        <div className="dflex nav-menu">
            <img src={videoGallery} alt="icons8-Chats" />
            <h3>{text}</h3>
        </div>
    );
}
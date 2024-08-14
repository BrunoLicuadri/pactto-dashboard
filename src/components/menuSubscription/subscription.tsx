import videoListIcon from '../../assets/icons8-lista-de-reprodução-de-vídeo-100.png'

type Props = {
    text: string;
}

export default function Subscription({ text }: Props) {

    return (
        <div className="dflex nav-menu">
            <img src={videoListIcon} alt="icons8-WebLink" />
            <h3>{text}</h3>
        </div>
    );
}
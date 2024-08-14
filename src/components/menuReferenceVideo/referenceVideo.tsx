import videoIcon from '../../assets/icons8-video-96.png'

type Props = {
    text: string;
}

export default function ReferenceVideo({ text }: Props) {

    return (
        <div className="dflex nav-menu">
            <img src={videoIcon} alt="icons8-WebLink" />
            <h3>{text}</h3>
        </div>
    );
}
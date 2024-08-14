import settingsIcon from '../../assets/icons8-configurações.svg'

type Props = {
    text: string;
}

export default function ReviewSettings({ text }: Props) {

    return (
        <div className="dflex nav-menu">
            <img src={settingsIcon} alt="icons8-WebLink" />
            <h3>{text}</h3>
        </div>
    );
}
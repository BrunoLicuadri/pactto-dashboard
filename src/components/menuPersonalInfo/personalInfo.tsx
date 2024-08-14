import userIcon from '../../assets/icons8-usuário-de-gênero-neutro-96.png'

type Props = {
    text: string;
}

export default function PersonalInfo({ text }: Props) {

    return (
        <div className="dflex nav-menu">
            <img src={userIcon} alt="icons8-WebLink" />
            <h3>{text}</h3>
        </div>
    );
}
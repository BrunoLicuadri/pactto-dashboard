import webLink from '../../assets/icons8-link-96.png'

type Props = {
    text: string;
}

export default function WebLink({ text }: Props) {

    return (
        <div className="dflex nav-menu">
              <img src={webLink} alt="icons8-WebLink" />
              <h3>{text}</h3>
            </div>
    );
}
import carouselIcon from '../../assets/icons8-view-carousel-100.png'

type Props = {
    text: string;
}

export default function Profile({ text }: Props) {

    return (
        <div className="dflex nav-menu">
            <img src={carouselIcon} alt="icons8-WebLink" />
            <h3>{text}</h3>
        </div>
    );
}
import homeIcon from '../../assets/icons8-home.svg'

type Props ={
    text: string;
}

export default function MenuHome( {text}:Props) {

    return (
        <div className="dflex nav-menu">
            <img src={homeIcon} alt="icons8-Home" />
            <h3>{text}</h3>
        </div>
    );
}
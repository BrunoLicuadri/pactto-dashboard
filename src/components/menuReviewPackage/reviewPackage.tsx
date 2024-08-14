import redeemIcon from '../../assets/icons8-resgatar-96.png'

type Props = {
    text: string;
}

export default function ReviewPackage({ text }: Props) {

    return (
        <div className="dflex nav-menu">
            <img src={redeemIcon} alt="icons8-WebLink" />
            <h3>{text}</h3>
        </div>
    );
}
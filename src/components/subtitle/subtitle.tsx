import './subtitle.css'

type Props ={
    text: string;
}

export default function Subtitle( { text }: Props) {

    return (
        <span className="subtitle-text">
            <h2>{text}</h2>
        </span>
    );
}
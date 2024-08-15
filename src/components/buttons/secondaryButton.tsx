import './buttons.css'

type Props = {
    text: string;
}

export default function SecondaryButton({ text }: Props) {

    return (
        <button type='reset' className="button-container button-text secondaryButton-bg" >{text}</button>
    );
}
import './buttons.css'

type Props = {
    text: string;
}

export default function PrimaryButton({ text }: Props) {

    return (
        <button type='submit' className="button-container button-text primaryButton-bg">{text}</button>
    );
}
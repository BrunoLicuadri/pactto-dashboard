import '../upload-section/upload.css'

type Props ={
    text: string;
}

export default function MyUpload( { text }: Props) {

    return (
        <span className="upload-text">
            <h2>{text}</h2>
        </span>
    );
}
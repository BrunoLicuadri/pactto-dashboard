import '../upload-section/upload.css'

type Props ={
    text: string;
}

export default function UploadButton( { text } : Props) {

    return (
        <span className="upload-video-container">
            <p>{text}</p>
        </span>
    );
}
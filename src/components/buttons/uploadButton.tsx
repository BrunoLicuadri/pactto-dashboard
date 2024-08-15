import '../upload-section/upload.css'
import { useRef } from 'react';

type Props = {
    text: string;
}

export default function UploadButton({ text }: Props) {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log("Botão clicado");
        console.log(fileInputRef.current);
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Arquivo selecionado:', file.name);
        }
    };

    return (
        <span className="button-container primaryButton-bg">
            <input type="file" ref={fileInputRef} accept="video/*" style={{ display: 'none' }} onChange={handleFileChange} />
            <p className='button-text' onClick={handleClick} id="uploadButton">{text}</p>
        </span>
    );
}
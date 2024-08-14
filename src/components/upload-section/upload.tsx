import SearchInput from '../searchImput/searchInput';
import MyUpload from '../subtitle/myUpload';
import UploadButton from '../uploadButton/uploadButton';
import './upload.css'

type Props ={
    subtitle: string;
}


export default function Upload( {subtitle} : Props) {

    return (
        <div className="upload-section">
            <div className="upload-container">
                <MyUpload text={subtitle}/>
                <UploadButton text='+ upload new video' />
            </div>
            <div className="search-container">
                <SearchInput />
            </div>
        </div>
    );
}
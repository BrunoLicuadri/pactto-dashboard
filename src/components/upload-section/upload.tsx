import SearchInput from '../searchImput/searchInput';
import UploadButton from '../buttons/uploadButton';
import './upload.css'
import Subtitle from '../subtitle/subtitle';


type Props ={
    subtitle: string;
}


export default function Upload( {subtitle} : Props) {

    return (
        <div className="upload-section">
            <div className="upload-container">
                <Subtitle text={subtitle}/>
                <UploadButton text='+ upload new video' />
            </div>
            <div className="search-container">
                <SearchInput />
            </div>
        </div>
    );
}
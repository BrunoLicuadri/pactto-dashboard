import './library.css'
import UploadButton from "../../components/buttons/uploadButton";
import SearchInput from "../../components/searchImput/searchInput";
import Subtitle from "../../components/subtitle/subtitle";

type Props = {
    subtitle: string;
}


export default function Library({ subtitle }: Props) {

    return (
        <div className="section-lib-container">
            <div className="subtitle-lib-container">
                <Subtitle text={subtitle} />
                <UploadButton text='+ upload new video' />
            </div>
            <div className="lib-search-container">
                <h3 className="lib-info">Videos uploaded to the reference video library can be used in side-by-side comparisons, or can be shared with learners directly.</h3>
                <SearchInput text='Search' />
            </div>
        </div>
    );

}
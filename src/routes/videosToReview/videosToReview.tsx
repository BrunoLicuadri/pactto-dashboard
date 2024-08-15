import SearchInput from '../../components/searchImput/searchInput';
import './videosToReview.css'

type Props = {
    text: string;
}

export default function VideosToReview({ text }: Props) {

    return (
        <>
            <div className='container'>
                <div className='searchChat-subtitle'>
                    <h1>{text}</h1>
                </div>

                <div className='searchChat-container'>
                    <SearchInput text='Search'/>
                </div>
            </div>


        </>

    );
}
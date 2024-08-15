import SearchInput from '../../components/searchImput/searchInput';
import './pacttosChat.css'

type Props = {
    text: string;
}

export default function PacttosChats({ text }: Props) {

    return (
        <>
            <div className="containerPC">
                <div className="searchChat-subtitle">
                    <h1>{text}</h1>
                </div>

                <div className="searchChat-container">
                    <p>No Pacttos found</p>
                    <SearchInput text="Search"/>
                </div>
            </div>


        </>

    );
}
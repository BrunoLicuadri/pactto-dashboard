import SearchInput from '../../components/searchImput/searchInput';
import './webLinksCreated.css'

type Props = {
    text1: string;
    text2: string;
}

export default function WebLinksCreated({ text1, text2 }: Props) {

    return (
        <>
            <div className='containerWL'>
                <div className='inner-Container'>
                    <div className='searchChat-subtitle'>
                        <h1>{text1}</h1>
                    </div>

                    <div className='searchChat-container'>
                        <SearchInput text='Search'/>
                    </div>
                </div>
                <div className='inner-Container'>
                    <div className='searchChat-subtitle'>
                        <h1>{text2}</h1>
                    </div>

                    <div className='searchChat-container'>
                        <SearchInput text='Search'/>
                    </div>
                </div>

            </div>


        </>

    );
}
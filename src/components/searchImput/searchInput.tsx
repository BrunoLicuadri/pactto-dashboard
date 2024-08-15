import searchIcon from '../../assets/icons8-search.svg'

type Props ={
    text: string;
}

export default function SearchInput( {text}:Props) {

    return (
        <div className="search-box">
            <div className="search">
                <input type="text" name="search-input" className="search-input" id="search-input" placeholder= {text} />
            </div>
            <div className="search-img">
                <img src={searchIcon} alt="icons8-search" />
            </div>
        </div>
    );
}
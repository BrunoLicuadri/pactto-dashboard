import searchIcon from '../../assets/icons8-search.svg'

export default function SearchInput() {

    return (
        <div className="search-box">
            <div className="search">
                <input type="text" name="search-input" className="search-input" id="search-input" placeholder="Search" />
            </div>
            <div className="search-img">
                <img src={searchIcon} alt="icons8-search" />
            </div>
        </div>
    );
}
import './searchBar.css'

export default function SearchBar() {
    return(
        <div className="search-bar">
            <div className='search-input-background'>
                <input className='search-input' type="text" placeholder="Pesquisar"/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
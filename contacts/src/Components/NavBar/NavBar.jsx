import SearchBar from "./SearchBar/SearchBar";
import PropTypes from 'prop-types';
import "./NavBar.css"


function NavBar({searchValue}){

    NavBar.propTypes = {
        searchValue: PropTypes.func
    };
    
    return (
        <div className="navbar-container">
            <div className="nav-title">
                <h1>Our Workplace</h1>
                <p className="subtitle">Contacts</p>
            </div>
            <SearchBar searchValue={searchValue} />
        </div>
    )
}

export default NavBar;
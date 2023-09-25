import PropTypes from 'prop-types';
import "./SearchBar.css"


function SearchBar({searchValue}){

    SearchBar.propTypes = {
        searchValue: PropTypes.func
    };
    
    
    return(
        <>
            <input type="search" onChange={searchValue} placeholder='Search contact...' />
        </>
    );
}

export default SearchBar
import React from 'react';
const Search = ({ name, setName }) => {
    return ( 
        <div className="search">
            <input value={name}   name="firstName" onChange={e => setName(e.target.value)} />
        </div>
     );
}
 
export default Search;

import React, {useState} from "react";

function Search({ listings, setListings }) {
  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log(listings)
    const searchedListing = listings.filter(listing => {
      return listing.description.toLowerCase().includes(search)
    });
    setListings(searchedListing)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

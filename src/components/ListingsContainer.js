import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {

  function handleDelete(deletedListing) {
    const updatedListings = listings.filter(listing => {
      return listing.id !== deletedListing.id
    })
    setListings(updatedListings)
  }

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return (
            <ListingCard
              key={listing.id}
              listing={listing}
              onDelete={handleDelete}
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;

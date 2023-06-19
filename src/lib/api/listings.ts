import type { ListingRow } from "$lib/types/listing-row";

export async function getLatestListings()  {
    const response = await fetch("http://localhost:8000/listings")
    const json = await response.json();
    const listings = json.listings as ListingRow[];

    return listings.filter((listing) => listing.midi != undefined);
}
import {getLatestListings} from "$lib/api/listings";

export let ssr = true;

export const load = async () => {
	const  latestListings  = await getLatestListings();
	return {latestListings }
};
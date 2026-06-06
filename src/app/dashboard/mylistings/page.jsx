
import ListingCard from "@/app/components/ListingCard";
import NoPets from "@/app/components/NoPets";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/pets/${user.id}`)
    const listings = await res.json()
    // console.log(listings)

    const Available = listings.filter((listing) => listing.status === "Available").length;
    const Adopted = listings.filter((listing) => listing.status === "Adopted").length;

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="space-y-5 my-10">
                <h2 className="text-3xl font-semibold">My Listings</h2>
                <p className="text-md">Manage your pet listings</p>
            </div>

            <div className="grid grid-cols-3 gap-5 my-10 ">
                <div className="border text-center py-6 rounded-2xl">
                    <h1>{listings.length}</h1>
                    <h2>Total Listing</h2>
                </div>
                <div className="border text-center py-6 rounded-2xl">
                    <h1>{Available}</h1>
                    <h2>Available</h2>
                </div>
                <div className="border text-center py-6 rounded-2xl">
                    <h1>{Adopted}</h1>
                    <h2>Adopted</h2>
                </div>
            </div>

            {
                listings.length === 0 ? (<NoPets></NoPets>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        listings.map(listing => <ListingCard key={listing._id} listing={listing}></ListingCard>)
                    }
                </div>)
            }
        </div>
    );
};

export default MyListingPage;



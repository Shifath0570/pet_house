import { Button } from "@heroui/react";
import Image from "next/image";
import { GrView } from "react-icons/gr";
import { ListingDeleteAlert } from "./ListingDeleteAlert";
import Link from "next/link";
import UpdateListing from "./UpdateListing";
import RequestModal from "./RequestModal";

const ListingCard = async ({ listing }) => {
    // console.log(listing)
    const {_id, petName, species, breed, imageUrl, adoptionFee} = listing;

    // console.log(listing._id)


    return (
        <div>
            <div className="border rounded-2xl">
                <Image className="w-full h-48 rounded-t-2xl" src={imageUrl} alt="image" height={250} width={250}></Image>
                <div className="p-3 space-y-2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">{petName}</h2>
                        <h3 className="trxt-xl font-semibold text-red-700">${adoptionFee}</h3>
                    </div>
                    <p className="text-md flex gap-1"><span>{species}</span>.<span>{breed}</span></p>

                    <div className="grid grid-cols-2 gap-2">
                        <Link href={`/dashboard/mylistings/${_id}`}>
                            <Button variant="outline" className={"w-full"}><GrView /><span>View</span></Button>
                        </Link>
                        <UpdateListing listing={listing}></UpdateListing>
                       <RequestModal petId={listing._id} petName={listing.petName}></RequestModal>
                        <ListingDeleteAlert listingId={listing._id}></ListingDeleteAlert>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
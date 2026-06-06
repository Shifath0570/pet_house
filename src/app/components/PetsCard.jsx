
import Image from "next/image";
import { FaGem } from "react-icons/fa";
import { BsGenderMale } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@heroui/react";
import Link from "next/link";

const PetsCard = ({ pet }) => {

    const { _id, imageUrl, petName, breed, age, adoptionFee, location, gender } = pet

    return (
        <div className="border rounded-2xl space-y-2">
            <div>
                <Image className="w-full h-46 rounded-t-2xl" src={imageUrl} alt="image" height={300} width={300}></Image>
            </div>
            <div className="p-3 space-y-2">
                <h2 className="text-xl font-semibold">{petName}</h2>
                <h3 className="text-md">{breed}</h3>
                <div className="flex items-center gap-3">
                    <p className="text-sm flex items-center gap-2"><FaGem /> {age} Year</p>
                    <p className="text-sm flex items-center gap-2"><BsGenderMale /> {gender}</p>
                    <p className="text-sm flex items-center gap-2"><CiLocationOn /> {location}</p>
                </div>
                <p className="text-xl font-semibold text-green-600">${adoptionFee}</p>
                <div className="grid grid-cols-2 gap-5">
                    <Link href={`/all-pets/${_id}`}>
                        <Button variant="outline" className="border w-full py-1 rounded-xl text-md font-semibold text-green-600">View Details</Button>
                    </Link>
                    <Link href={'/dashboard/mylistings'}>
                        <Button variant="outline" className="border w-full py-1 rounded-xl text-md font-semibold text-green-600">Adopt Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PetsCard;
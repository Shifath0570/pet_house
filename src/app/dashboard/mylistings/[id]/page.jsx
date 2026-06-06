
import Image from "next/image";
import { RiHomeHeartLine } from "react-icons/ri";
import { BsGenderMale } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { TbHealthRecognition } from "react-icons/tb";
import { GiHealthCapsule } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { GrUploadOption } from "react-icons/gr";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { MdOutlinePets } from "react-icons/md";


const PetDetailsPage = async ({ params }) => {
    const { id } = await params;

    const {token} = await auth.api.getToken({
            headers: await headers()
        })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/pet/${id}`,{
        headers: {
            authorization: `${token}`
        }
    })
    const pets = await res.json();
    console.log(pets)
    const {_id, petName, species, breed, age, gender, imageUrl, healthStatus, vaccinationStatus, location, adoptionFee, Description, email} = pets;
    
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-2xl font-semibold my-5">Pet Details Page</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <Image className="h-150 rounded-xl" src={imageUrl} alt="image" height={1000} width={500}></Image>
                </div>
                <div className="space-y-10">
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold">{petName}</h1>
                        <p className="text-xl font-semibold">{breed}</p>
                    </div>
                    <div className="space-y-3">
                        <p className="flex items-center gap-3"><MdOutlinePets /> <span className="text-lg font-semibold">Species </span>: <span className="text-md">{species} Years</span></p>
                        <p className="flex items-center gap-3"><RiHomeHeartLine /> <span className="text-lg font-semibold">Age</span>: <span className="text-md">{age} Years</span></p>
                        <p className="flex items-center gap-3"><BsGenderMale /> <span className="text-lg font-semibold">Gender</span>: <span className="text-md">{gender}</span></p>
                        <p className="flex items-center gap-3"><FaLink /> <span className="text-lg font-semibold">Breed</span>: <span className="text-md">{breed}</span></p>
                        <p className="flex items-center gap-3"><TbHealthRecognition /> <span className="text-lg font-semibold">Health</span>: <span className="text-md">{healthStatus}</span></p>
                        <p className="flex items-center gap-3"><GiHealthCapsule /> <span className="text-lg font-semibold">Veccinated</span>: <span className="text-md">{vaccinationStatus}</span></p>
                        <p className="flex items-center gap-3"><CiLocationOn /> <span className="text-lg font-semibold">Location</span>: <span className="text-md">{location}</span></p>
                        <p className="flex items-center gap-3"><GrUploadOption /> <span className="text-lg font-semibold">Adoption Fee</span>: <span className="text-md">${adoptionFee}</span></p>
                    </div>

                    <div className="space-y-5 mt-25">
                        <h2 className="text-2xl font-bold">About {petName}</h2>
                        <p className="text-md">{Description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetailsPage;
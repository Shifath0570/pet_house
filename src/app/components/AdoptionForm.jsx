"use client"
import { MdOutlinePets } from "react-icons/md";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";

const AdoptionForm = ({ pet, user }) => {

    const handleAdoptData = async (e) => {

        if (pet.email === user.email) {
            return toast.error("You cannot adopt your own pet");
        }
        
        if(pet.status === "Adopted"){
            return toast.error("Pet is already adopted please try another pet....");
        }

        const form = e.target;
        e.preventDefault();
        const adoptedData = {
            userId: user?.id,
            userEmail: user?.email,
            userImage: user?.image,
            userName: user?.name,
            petId: pet?._id,
            petName: pet?.petName,
            ownerEmail: pet?.email,
            species: pet?.species,
            breed: pet?.breed,
            petAge: pet?.age,
            gender: pet?.gender,
            vaccinationStatus: pet?.vaccinationStatus,
            healthStatus: pet?.healthStatus,
            Description: pet?.Description,
            adoptionFee: pet?.adoptionFee,
            imageUrl: pet?.imageUrl,
            location: pet?.location,
            pickupDate: form.pickupDate.value,
            message: form.message.value,
            status: "Pending"

        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/adoption`,{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(adoptedData)
        })
        const data = await res.json();
        toast.success("Your Adoption is Successful....");
        console.log(data)
    }

    const handleStatus = async (currentStatus) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/status-change/${pet._id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    status: currentStatus,
                }),
            }
            );
            const data = await res.json();
            window.location.reload();
    
            if (data.modifiedCount > 0) {
                toast.success(`Request ${currentStatus}`);
            }
        };



    return (
        <div>
            <form onSubmit={handleAdoptData}  className="space-y-5">
                <div>
                    <label className="font-medium">
                        Pet Name
                    </label>
                    <input
                        type="text"
                        name="petName"
                        readOnly
                        value={pet.petName}
                        className="w-full mt-3 border outline-none rounded-lg px-4 py-2 bg-gray-100" />
                </div>

                <div>
                    <label className="font-medium">
                        User Name
                    </label>
                    <input
                        name="userName"
                        type="text"
                        value={user?.name || ""}
                        placeholder="Enter User Name"
                        className="w-full mt-3 border outline-none rounded-lg px-4 py-2 bg-gray-100" />
                </div>

                <div>
                    <label className="font-medium">
                        User Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={user?.email || ""}
                        placeholder="Enter User Email"
                        className="w-full mt-3 border outline-none rounded-lg px-4 py-2 bg-gray-100" />
                </div>

                <div>
                    <label className="font-medium">
                        Pickup Date
                    </label>
                    <input

                        type="date"
                        name="pickupDate"
                        required
                        className="w-full mt-3 border outline-none rounded-lg px-4 py-2 bg-gray-100" />
                </div>

                <div>
                    <label className="font-medium">
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        rows="4"
                        placeholder="Why do you want to adopt this pet?"
                        className="w-full mt-3 border outline-none rounded-lg px-4 py-2 bg-gray-100" />
                </div>

                <Button onPress={() => handleStatus("Adopted")} type="submit" className="w-full text-white bg-amber-700 py-5 rounded-lg font-semibold">
                    <span>Adopt Now</span> <MdOutlinePets />
                </Button>
            </form>
        </div>
    );
};

export default AdoptionForm;
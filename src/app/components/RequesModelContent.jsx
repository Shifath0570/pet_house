"use client";
import { Button, Modal } from "@heroui/react";
import toast from "react-hot-toast";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";


const RequesModelContent = ({ petName, adoption }) => {
    const { _id, userName, status, userEmail, pickupDate } = adoption

    const handleStatus = async (currentStatus) => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/adoption-request/${_id}`, {
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
            <Modal key={adoption._id}>
                <Button variant="outline" className={"w-full"}><LiaUserFriendsSolid /><span>Requests</span></Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <h2 className="flex items-center gap-2 text-sm"><LuUsers /> <span>Adoption Request for {petName}</span></h2>
                            <div className="space-y-2 border rounded-2xl p-3 my-2">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold">{userName}</h2>
                                    <span className="text-sm bg-blue-100 text-amber-400 px-3 rounded-2xl">{status}</span>
                                </div>
                                <p className="text-md">{userEmail}</p>
                                <p className="text-md">Pickup:{pickupDate}</p>
                                <input type="text" placeholder={`i  want to pet this ${petName}`} className="w-full border outline-none rounded-4xl px-4 py-1 bg-gray-300" />
                                <div className="flex gap-2">
                                    {status !== "Approved" &&
                                        status !== "Rejected" && (
                                            <div className="flex gap-2 pt-2">

                                                <Button onPress={() => handleStatus("Approved")} className="w-full bg-green-600 text-white">Approve</Button>

                                                <Button onPress={() => handleStatus("Rejected")} className="w-full bg-red-600 text-white">Reject</Button>

                                            </div>
                                        )}
                                </div>
                            </div>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default RequesModelContent;











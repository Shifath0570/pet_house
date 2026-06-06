import { Button, Modal } from "@heroui/react";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import RequesModelContent from "./RequesModelContent";

const RequestModal = async ({petName, petId}) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/adoption/${petId}`);
    const adoptions = await res.json();

    return (
        <div>
            {
                adoptions.length === 0 ? (<Modal>
                    <Button variant="outline" className={"w-full"}><LiaUserFriendsSolid /><span>Requests</span></Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                            <Modal.Dialog className="sm:max-w-[360px]">
                                <h2 className="flex items-center gap-2 text-sm"><LuUsers /> <span>Adoption Request for {petName}</span></h2>
                                <div className="space-y-2 border rounded-2xl p-3 my-2">
                                    <p>No Reques Found</p>
                                </div>
                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>) :
                    <div>
                        {
                            adoptions.map(adoption => <RequesModelContent key={adoption._id} petName={petName} adoption={adoption}></RequesModelContent>)
                        }
                    </div>
            }

        </div>
    );
};

export default RequestModal;

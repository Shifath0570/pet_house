import { Button } from "@heroui/react";
import Link from "next/link";
import RequestsDeleteAlert from "./RequestsDeleteAlert";

const RequestsCard = ({ request }) => {
    const { _id, petName, status, pickupDate } = request;

    return (
        <div>
            <div>
                <div className="grid grid-cols-4 justify-between items-center bg-green-600 rounded-xl px-2 py-1 my-2">
                    <h2>{petName}</h2>
                    <p>{pickupDate}</p>
                    <p>{status}</p>
                    <div>
                        {
                            status === "Pending" && (<RequestsDeleteAlert requestId={request._id}></RequestsDeleteAlert>)
                        }

                        <Link href={`/dashboard/myrequests/${_id}`}>
                            <Button variant="outline">View</Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestsCard;
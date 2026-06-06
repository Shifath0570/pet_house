import NoPets from "@/app/components/NoPets";
import RequestsCard from "@/app/components/RequestsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyRequestsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const email = user.email;
    // console.log(email)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/my-requests/${email}`);
    const requests = await res.json();

    console.log(requests)

    const Pending = requests.filter((request) => request.status === "Pending").length;
    const Approved = requests.filter((request) => request.status === "Approved").length;
    const Rejected = requests.filter((request) => request.status === "Rejected").length;


    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="space-y-5 my-10">
                <h2 className="text-3xl font-semibold">My Adoption Requests</h2>
                <p className="text-md">Manage your pet Requests</p>
            </div>

            <div className="grid grid-cols-4 gap-5 my-10 ">
                <div className="border text-center py-6 rounded-2xl">
                    <h1>{requests.length}</h1>
                    <h2>Total Requests</h2>
                </div>
                <div className="border text-center py-6 rounded-2xl">
                    <h1>{Pending}</h1>
                    <h2>Pending</h2>
                </div>
                <div className="border text-center py-6 rounded-2xl">
                    <h1>{Approved}</h1>
                    <h2>Approved</h2>
                </div>
                <div className="border text-center py-6 rounded-2xl">
                    <h1>{Rejected}</h1>
                    <h2>Rejected</h2>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-4 justify-between items-center">
                    <p>PetName</p>
                    <p>PickupDate</p>
                    <p>Status</p>
                    <p>Action</p>
                </div>
                {
                    requests.length === 0 ? (<NoPets></NoPets>) : (<div>
                        {
                            requests.map(request => <RequestsCard key={request._id} request={request}></RequestsCard>)
                        }
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyRequestsPage;
import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiReacthookform } from "react-icons/si";


const Dashboard = () => {
    return (
        <div className="max-w-7xl">
            <div className="drawer lg:drawer-open border w-96">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-5">
                        <h2 className="text-xl font-semibold">Dashboard</h2>
                        <li>
                            <Link href={"/dashboard/myrequests"} className="flex items-center gap-3 text-lg font-semibold"><SiReacthookform />My Requests</Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/addpet"} className="flex items-center gap-3 text-lg font-semibold"><IoMdAddCircleOutline />Add Pet</Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/mylistings"} className="flex items-center gap-3 text-lg font-semibold"><IoMdAddCircleOutline />My Listings</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
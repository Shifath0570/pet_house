import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaw, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-5 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center gap-3">
                            <FaPaw className="text-green-600 text-2xl" />
                            <h2 className="text-3xl font-bold text-green-500">PawFind</h2>
                        </div>

                        <p className="mt-4 text-gray-300 leading-7">
                            Find loving homes for pets and connect
                            with pet lovers around the world.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
                        <div className="flex flex-col gap-3 text-gray-300">
                            <Link href="/">
                                Home
                            </Link>

                            <Link href="/all-pets">
                                All Pets
                            </Link>

                            <Link href="/dashboard/my-requests">
                                My Requests
                            </Link>

                            <Link href="/dashboard/add-pet">
                                Add Pet
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-5">Contact Info</h3>
                        <div className="space-y-3 text-gray-300">
                            <p>Email: support@pethaven.com</p>

                            <p>Phone: +880 1234-567890</p>

                            <p>Location: Chattogram, Bangladesh</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-5">Follow Us</h3>
                        <div className="flex items-center gap-4">
                            <Link href="https://facebook.com" target="_blank" className="bg-white/10 hover:bg-green-600 transition p-3 rounded-full">
                                <FaFacebookF size={18} />
                            </Link>

                            <Link href="https://instagram.com" target="_blank" className="bg-white/10 hover:bg-green-600 transition p-3 rounded-full">
                                <FaInstagram size={18} />
                            </Link>

                            <Link href="https://twitter.com" target="_blank" className="bg-white/10 hover:bg-green-600 transition p-3 rounded-full">
                                <FaTwitter size={18} />
                            </Link>

                            <Link href="https://linkedin.com" target="_blank" className="bg-white/10 hover:bg-green-600 transition p-3 rounded-full">
                                <FaLinkedinIn size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400">
                    <p> © {new Date().getFullYear()} Pet Haven. All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
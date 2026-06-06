"use client"

import Image from "next/image";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Header, Label } from "@heroui/react";
import { FaPaw } from "react-icons/fa";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { redirect } from "next/navigation";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {

    const { data: session, } = authClient.useSession();
    const user = session?.user;
    // console.log(user)

    const handleLogOut = async () => {
        await authClient.signOut();
        redirect("/login")
    }

    return (
        <div>
            <div className="flex justify-between items-center p-3 px-20 border-b bg-green-500">
                <div className="flex items-center gap-3">
                    <div>
                        <FaPaw className=" text-4xl" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">PawFind</h2>
                        <p className="text-sm">Find Love. Adopt a Pet.</p>
                    </div>
                </div>


                <ul className="flex items-center gap-7">
                    <li>
                        <Link href={"/"} className="flex items-center gap-3 text-lg font-semibold"><IoMdHome />Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-pets"} className="flex items-center gap-3 text-lg font-semibold"><MdOutlinePets />All Pets</Link>
                    </li>
                </ul>


                <ul className="flex items-center gap-7">
                    {user ? <Dropdown>
                        <Button aria-label="Menu" className="flex items-center gap-3 border-none bg-green-500 text-black">
                            <Avatar>
                                <Avatar.Image alt={user?.name} src={user?.image} />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                            <h2 className="flex items-center gap-3 text-lg">{user?.name} <FaArrowDown /></h2>
                        </Button>
                        <Dropdown.Popover className="min-w-[256px]">
                            <Dropdown.Menu>
                                <Dropdown.Section>
                                    <Header>{user?.email}</Header>
                                    <Dropdown.Item id="apple" textValue="Apple">
                                        <Dropdown.ItemIndicator />
                                        <Link href={"/dashboard/myrequests"} className="flex items-center gap-3 text-lg font-semibold"><IoMdAddCircleOutline />Dashboard</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="logout" textValue="Logout">
                                        <Dropdown.ItemIndicator />
                                        <Button variant="ghost" className="text-lg font-semibold" onClick={handleLogOut}>
                                            Logout
                                        </Button>
                                    </Dropdown.Item>
                                </Dropdown.Section>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown> : <>
                        <li>
                            <Link href={"/login"} className="flex items-center gap-3 bg-green-700 px-5 py-2 rounded-md text-lg font-semibold text-white"><AiOutlineLogin />Login</Link>
                        </li>
                        <li>
                            <Link href={"/register"} className="flex items-center gap-3 text-lg font-semibold">Register</Link>
                        </li>
                    </>}

                    <div>
                        <ThemeToggle></ThemeToggle>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
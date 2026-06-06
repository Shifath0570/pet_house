"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-100 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-green-600 font-semibold mb-3">
            Find Your Perfect Companion
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"> Give a Pet a <span className="text-green-600"> Loving Home</span> </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Discover adorable pets waiting for adoption.
            Help dogs, cats, birds, and rabbits find a caring
            family and create unforgettable memories together.</p>

          <div className="mt-8 flex items-center gap-5">
            <Link href="/all-pets">
              <Button className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-6 rounded-xl font-semibold shadow-lg">Adopt Now</Button>
            </Link>

            <Link href="/about">
              <Button className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-6 rounded-xl font-semibold shadow-lg">Learn More</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <Image src="https://images.unsplash.com/photo-1517849845537-4d257902454a" alt="Pet Banner" className="w-full max-w-2xl rounded-3xl shadow-2xl object-cover" width={250} height={250}></Image>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const FeaturedPets = ({ pets }) => {
    return (
        <section className="max-w-7xl mx-auto px-5 py-20">
            <div className="text-center mb-14">
                <p className="text-green-600 text-4xl font-semibold mb-2">Featured Pets</p>
                <h2 className="text-4xl md:text-5xl font-bold">Meet Our Lovely Pets</h2>
                <p className="mt-5  max-w-2xl mx-auto leading-7">
                    Explore adorable pets looking for a loving family.
                    Adopt your perfect companion today and make a difference.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    pets?.slice(0, 6).map((pet, index) => (
                        <motion.div key={pet._id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border">
                            <div className="overflow-hidden">
                                <Image src={pet.imageUrl} alt={pet.petName} height={300} width={300} className="w-full h-64 object-cover hover:scale-110 transition duration-500"></Image>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-gray-900">{pet.petName}</h3>
                                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">{pet.species}</span>
                                </div>

                                <div className="mt-4 space-y-2 text-gray-600">
                                    <p><span className="font-semibold">Breed :</span> {pet.breed}</p>

                                    <p><span className="font-semibold">Age : </span>{pet.age}</p>

                                    <p><span className="font-semibold">Location : </span>{pet.location}</p>
                                </div>

                                <div className="mt-6 flex items-center justify-between">
                                    <p className="text-xl font-bold text-green-600">${pet.adoptionFee}</p>

                                    <Link href={`/all-pets/${pet._id}`}>
                                        <button className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-3 rounded-xl font-medium">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
};

export default FeaturedPets;
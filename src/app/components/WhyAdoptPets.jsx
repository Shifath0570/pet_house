import { FaHeart, FaHome, FaPaw } from "react-icons/fa";

const WhyAdoptPets = () => {
    return (
        <section className=" py-20">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-14">
                    <p className="text-green-600 text-4xl font-semibold">Why Adopt?</p>
                    
                    <h2 className="text-4xl font-bold mt-3">Give Pets a Better Life</h2>
                    <p className=" mt-4 max-w-2xl mx-auto">
                        Adopting pets helps reduce homelessness and gives
                        animals the loving families they deserve.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-md text-center">
                        <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                            <FaHeart className="text-3xl text-green-600" />
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">Save Lives</h3>

                        <p className="text-gray-600 mt-4 leading-7">Every adoption helps a pet find safety, care, and a forever home.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-md text-center">
                        <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                            <FaHome className="text-3xl text-green-600" />
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">Build Companionship</h3>

                        <p className="text-gray-600 mt-4 leading-7">Pets bring happiness, comfort, andemotional support into your life.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-md text-center">
                        <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                            <FaPaw className="text-3xl text-green-600" />
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">Encourage Responsibility</h3>

                        <p className="text-gray-600 mt-4 leading-7">Caring for pets teaches love, patience, and responsibility.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAdoptPets;
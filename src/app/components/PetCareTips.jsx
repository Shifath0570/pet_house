import { FaBone, FaSyringe, FaWalking } from "react-icons/fa";

const PetCareTips = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-green-600 text-4xl font-semibold">Pet Care</p>

          <h2 className="text-4xl font-bold mt-3">Essential Pet Care Tips</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-md p-8">
            <FaBone className="text-5xl text-green-600" />

            <h3 className="text-2xl font-semibold mt-6">Healthy Nutrition</h3>

            <p className="text-gray-600 mt-4 leading-7">Feed pets balanced meals and provide clean water to keep them healthy and active.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">
            <FaSyringe className="text-5xl text-green-600" />

            <h3 className="text-2xl font-semibold mt-6">Regular Vaccination</h3>

            <p className="text-gray-600 mt-4 leading-7">Ensure pets receive regular checkups and vaccines to prevent diseases.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">
            <FaWalking className="text-5xl text-green-600" />

            <h3 className="text-2xl font-semibold mt-6">Daily Exercise</h3>

            <p className="text-gray-600 mt-4 leading-7">Physical activity keeps pets fit, happy, and mentally stimulated.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;
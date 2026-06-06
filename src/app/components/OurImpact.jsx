import { FaPaw, FaHome, FaHeart, FaUsers } from "react-icons/fa";

const OurImpact = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-green-600 text-4xl font-semibold">Our Impact</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3"> Changing Lives One Adoption at a Time</h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-7">
            Every adoption creates a happier future for pets and families.
            Together, we are building a compassionate community where every
            animal gets the love and care they deserve.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-2xl transition">
            <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <FaPaw className="text-4xl text-green-600" />
            </div>

            <h3 className="text-4xl font-bold mt-6 text-gray-900">1,200+</h3>

            <p className="text-gray-600 mt-3 text-lg">Pets Rescued</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-2xl transition">
            <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <FaHome className="text-4xl text-green-600" />
            </div>

            <h3 className="text-4xl font-bold mt-6 text-gray-900">950+</h3>

            <p className="text-gray-600 mt-3 text-lg">Successful Adoptions</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-2xl transition">
            <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <FaUsers className="text-4xl text-green-600" />
            </div>

            <h3 className="text-4xl font-bold mt-6 text-gray-900">500+</h3>

            <p className="text-gray-600 mt-3 text-lg">Happy Families</p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-2xl transition">
            <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
              <FaHeart className="text-4xl text-green-600" />
            </div>

            <h3 className="text-4xl font-bold mt-6 text-gray-900">100%</h3>

            <p className="text-gray-600 mt-3 text-lg">Love & Care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
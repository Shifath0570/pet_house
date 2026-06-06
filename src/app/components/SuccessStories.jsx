import Image from "next/image";


const SuccessStories = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-green-600 text-4xl font-semibold">Happy Families</p>

          <h2 className="text-4xl font-bold mt-3">Adoption Success Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-3xl p-8">
            <Image src="https://images.unsplash.com/photo-1517849845537-4d257902454a" alt="image" height={250} width={250} className="w-24 h-24 rounded-full object-cover mx-auto"></Image>

            <h3 className="text-2xl font-semibold text-center mt-5">Bella & Sarah</h3>

            <p className="text-gray-600 text-center mt-4 leading-7">Bella found a loving home with Sarah and now enjoys daily walks and endless cuddles.</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-8">

            <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131" alt="image" height={250} width={250} className="w-24 h-24 rounded-full object-cover mx-auto"></Image>

            <h3 className="text-2xl font-semibold text-center mt-5">Milo & Alex</h3>

            <p className="text-gray-600 text-center mt-4 leading-7">Milo was rescued and adopted into a caring family that gave him a second chance.</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-8">
            <Image src="https://images.unsplash.com/photo-1507146426996-ef05306b995a" alt="image" height={250} width={250} className="w-24 h-24 rounded-full object-cover mx-auto"></Image>

            <h3 className="text-2xl font-semibold text-center mt-5">Rocky & Emma</h3>

            <p className="text-gray-600 text-center mt-4 leading-7">Rocky became the perfect companion for Emma and brought joy back into her life.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;